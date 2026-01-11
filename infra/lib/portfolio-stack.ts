import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as path from 'path';

export interface PortfolioStackProps extends cdk.StackProps {
    environment: 'staging' | 'prod';
    domainName: string;
    hostedZoneId?: string; // Optional: If known, otherwise we look it up by name
}

export class PortfolioStack extends cdk.Stack {
    public readonly distributionId: cdk.CfnOutput;
    public readonly bucketName: cdk.CfnOutput;
    public readonly siteUrl: cdk.CfnOutput;

    constructor(scope: Construct, id: string, props: PortfolioStackProps) {
        super(scope, id, props);

        const { environment, domainName } = props;
        const isProd = environment === 'prod';

        // 1. S3 Bucket for hosting assets
        // Use clear removal policy for this demo/setup to avoid orphaned resources, 
        // but in a strict real-world 'prod' you might prefer RETAIN.
        const siteBucket = new s3.Bucket(this, 'SiteBucket', {
            bucketName: `${props.stackName}-assets`.toLowerCase(),
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            removalPolicy: cdk.RemovalPolicy.DESTROY, // Easy cleanup per user request
            autoDeleteObjects: true, // Easy cleanup
            encryption: s3.BucketEncryption.S3_MANAGED,
        });

        // 2. Lookup Route53 Hosted Zone
        // We assume the zone exists. If the domain is 'staging.example.com', 
        // we likely look up 'example.com' zone.
        const rootDomain = domainName.split('.').slice(-2).join('.'); // very basic heuristic, adjust if using sub.sub.domain

        const zone = route53.HostedZone.fromLookup(this, 'Zone', {
            domainName: rootDomain,
        });

        // 3. TLS Certificate
        // CloudFront requires certificates in us-east-1
        const certificate = new acm.Certificate(this, 'SiteCertificate', {
            domainName: domainName,
            validation: acm.CertificateValidation.fromDns(zone),
        });

        // 4. CloudFront Distribution
        const distribution = new cloudfront.Distribution(this, 'SiteDistribution', {
            defaultBehavior: {
                origin: new origins.S3Origin(siteBucket),
                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
            },
            domainNames: [domainName],
            certificate: certificate,
            errorResponses: [
                // SPA Fallback: Redirect 403 (S3 default for missing key) and 404 to index.html
                {
                    httpStatus: 403,
                    responseHttpStatus: 200,
                    responsePagePath: '/index.html',
                    ttl: cdk.Duration.seconds(0),
                },
                {
                    httpStatus: 404,
                    responseHttpStatus: 200,
                    responsePagePath: '/index.html',
                    ttl: cdk.Duration.seconds(0),
                },
            ],
            defaultRootObject: 'index.html',
            comment: `Portfolio ${environment} distribution`,
            minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
        });

        // 5. DNS A Record
        new route53.ARecord(this, 'SiteAliasRecord', {
            recordName: domainName,
            target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
            zone: zone,
        });

        // 6. Outputs
        this.distributionId = new cdk.CfnOutput(this, 'DistributionId', {
            value: distribution.distributionId,
            description: 'CloudFront Distribution ID',
        });

        this.bucketName = new cdk.CfnOutput(this, 'BucketName', {
            value: siteBucket.bucketName,
            description: 'S3 Bucket Name',
        });

        this.siteUrl = new cdk.CfnOutput(this, 'SiteUrl', {
            value: `https://${domainName}`,
            description: 'The URL of the deployed site',
        });
    }
}

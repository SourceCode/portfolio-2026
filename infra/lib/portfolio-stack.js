"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioStack = void 0;
const cdk = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
const cloudfront = require("aws-cdk-lib/aws-cloudfront");
const origins = require("aws-cdk-lib/aws-cloudfront-origins");
const acm = require("aws-cdk-lib/aws-certificatemanager");
const route53 = require("aws-cdk-lib/aws-route53");
const targets = require("aws-cdk-lib/aws-route53-targets");
class PortfolioStack extends cdk.Stack {
    constructor(scope, id, props) {
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
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
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
exports.PortfolioStack = PortfolioStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGZvbGlvLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9ydGZvbGlvLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUVuQyx5Q0FBeUM7QUFFekMseURBQXlEO0FBQ3pELDhEQUE4RDtBQUM5RCwwREFBMEQ7QUFDMUQsbURBQW1EO0FBQ25ELDJEQUEyRDtBQVMzRCxNQUFhLGNBQWUsU0FBUSxHQUFHLENBQUMsS0FBSztJQUt6QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQTBCO1FBQ2hFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQzFDLE1BQU0sTUFBTSxHQUFHLFdBQVcsS0FBSyxNQUFNLENBQUM7UUFFdEMsa0NBQWtDO1FBQ2xDLDZFQUE2RTtRQUM3RSw2REFBNkQ7UUFDN0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDakQsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLFNBQVMsU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUNyRCxnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTO1lBQ2pELGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU87WUFDeEMsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixVQUFVLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFVBQVU7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsZ0NBQWdDO1FBQ2hDLHNFQUFzRTtRQUN0RSx3Q0FBd0M7UUFDeEMsTUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyx1REFBdUQ7UUFFckgsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUNyRCxVQUFVLEVBQUUsVUFBVTtTQUN6QixDQUFDLENBQUM7UUFFSCxxQkFBcUI7UUFDckIsZ0RBQWdEO1FBQ2hELE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDN0QsVUFBVSxFQUFFLFVBQVU7WUFDdEIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3RELENBQUMsQ0FBQztRQUVILDZCQUE2QjtRQUM3QixNQUFNLFlBQVksR0FBRyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFO1lBQ3ZFLGVBQWUsRUFBRTtnQkFDYixNQUFNLEVBQUUsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDeEMsb0JBQW9CLEVBQUUsVUFBVSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQjtnQkFDdkUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCO2FBQ3hEO1lBQ0QsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ3pCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLGNBQWMsRUFBRTtnQkFDWixnRkFBZ0Y7Z0JBQ2hGO29CQUNJLFVBQVUsRUFBRSxHQUFHO29CQUNmLGtCQUFrQixFQUFFLEdBQUc7b0JBQ3ZCLGdCQUFnQixFQUFFLGFBQWE7b0JBQy9CLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQy9CO2dCQUNEO29CQUNJLFVBQVUsRUFBRSxHQUFHO29CQUNmLGtCQUFrQixFQUFFLEdBQUc7b0JBQ3ZCLGdCQUFnQixFQUFFLGFBQWE7b0JBQy9CLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQy9CO2FBQ0o7WUFDRCxpQkFBaUIsRUFBRSxZQUFZO1lBQy9CLE9BQU8sRUFBRSxhQUFhLFdBQVcsZUFBZTtZQUNoRCxzQkFBc0IsRUFBRSxVQUFVLENBQUMsc0JBQXNCLENBQUMsYUFBYTtTQUMxRSxDQUFDLENBQUM7UUFFSCxrQkFBa0I7UUFDbEIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUN6QyxVQUFVLEVBQUUsVUFBVTtZQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEYsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7UUFFSCxhQUFhO1FBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQzVELEtBQUssRUFBRSxZQUFZLENBQUMsY0FBYztZQUNsQyxXQUFXLEVBQUUsNEJBQTRCO1NBQzVDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDcEQsS0FBSyxFQUFFLFVBQVUsQ0FBQyxVQUFVO1lBQzVCLFdBQVcsRUFBRSxnQkFBZ0I7U0FDaEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUM5QyxLQUFLLEVBQUUsV0FBVyxVQUFVLEVBQUU7WUFDOUIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUEzRkQsd0NBMkZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgczMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXMzJztcbmltcG9ydCAqIGFzIHMzZGVwbG95IGZyb20gJ2F3cy1jZGstbGliL2F3cy1zMy1kZXBsb3ltZW50JztcbmltcG9ydCAqIGFzIGNsb3VkZnJvbnQgZnJvbSAnYXdzLWNkay1saWIvYXdzLWNsb3VkZnJvbnQnO1xuaW1wb3J0ICogYXMgb3JpZ2lucyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY2xvdWRmcm9udC1vcmlnaW5zJztcbmltcG9ydCAqIGFzIGFjbSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY2VydGlmaWNhdGVtYW5hZ2VyJztcbmltcG9ydCAqIGFzIHJvdXRlNTMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXJvdXRlNTMnO1xuaW1wb3J0ICogYXMgdGFyZ2V0cyBmcm9tICdhd3MtY2RrLWxpYi9hd3Mtcm91dGU1My10YXJnZXRzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9ydGZvbGlvU3RhY2tQcm9wcyBleHRlbmRzIGNkay5TdGFja1Byb3BzIHtcbiAgICBlbnZpcm9ubWVudDogJ3N0YWdpbmcnIHwgJ3Byb2QnO1xuICAgIGRvbWFpbk5hbWU6IHN0cmluZztcbiAgICBob3N0ZWRab25lSWQ/OiBzdHJpbmc7IC8vIE9wdGlvbmFsOiBJZiBrbm93biwgb3RoZXJ3aXNlIHdlIGxvb2sgaXQgdXAgYnkgbmFtZVxufVxuXG5leHBvcnQgY2xhc3MgUG9ydGZvbGlvU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICAgIHB1YmxpYyByZWFkb25seSBkaXN0cmlidXRpb25JZDogY2RrLkNmbk91dHB1dDtcbiAgICBwdWJsaWMgcmVhZG9ubHkgYnVja2V0TmFtZTogY2RrLkNmbk91dHB1dDtcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2l0ZVVybDogY2RrLkNmbk91dHB1dDtcblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBQb3J0Zm9saW9TdGFja1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IHsgZW52aXJvbm1lbnQsIGRvbWFpbk5hbWUgfSA9IHByb3BzO1xuICAgICAgICBjb25zdCBpc1Byb2QgPSBlbnZpcm9ubWVudCA9PT0gJ3Byb2QnO1xuXG4gICAgICAgIC8vIDEuIFMzIEJ1Y2tldCBmb3IgaG9zdGluZyBhc3NldHNcbiAgICAgICAgLy8gVXNlIGNsZWFyIHJlbW92YWwgcG9saWN5IGZvciB0aGlzIGRlbW8vc2V0dXAgdG8gYXZvaWQgb3JwaGFuZWQgcmVzb3VyY2VzLCBcbiAgICAgICAgLy8gYnV0IGluIGEgc3RyaWN0IHJlYWwtd29ybGQgJ3Byb2QnIHlvdSBtaWdodCBwcmVmZXIgUkVUQUlOLlxuICAgICAgICBjb25zdCBzaXRlQnVja2V0ID0gbmV3IHMzLkJ1Y2tldCh0aGlzLCAnU2l0ZUJ1Y2tldCcsIHtcbiAgICAgICAgICAgIGJ1Y2tldE5hbWU6IGAke3Byb3BzLnN0YWNrTmFtZX0tYXNzZXRzYC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgcHVibGljUmVhZEFjY2VzczogZmFsc2UsXG4gICAgICAgICAgICBibG9ja1B1YmxpY0FjY2VzczogczMuQmxvY2tQdWJsaWNBY2Nlc3MuQkxPQ0tfQUxMLFxuICAgICAgICAgICAgcmVtb3ZhbFBvbGljeTogY2RrLlJlbW92YWxQb2xpY3kuREVTVFJPWSwgLy8gRWFzeSBjbGVhbnVwIHBlciB1c2VyIHJlcXVlc3RcbiAgICAgICAgICAgIGF1dG9EZWxldGVPYmplY3RzOiB0cnVlLCAvLyBFYXN5IGNsZWFudXBcbiAgICAgICAgICAgIGVuY3J5cHRpb246IHMzLkJ1Y2tldEVuY3J5cHRpb24uUzNfTUFOQUdFRCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gMi4gTG9va3VwIFJvdXRlNTMgSG9zdGVkIFpvbmVcbiAgICAgICAgLy8gV2UgYXNzdW1lIHRoZSB6b25lIGV4aXN0cy4gSWYgdGhlIGRvbWFpbiBpcyAnc3RhZ2luZy5leGFtcGxlLmNvbScsIFxuICAgICAgICAvLyB3ZSBsaWtlbHkgbG9vayB1cCAnZXhhbXBsZS5jb20nIHpvbmUuXG4gICAgICAgIGNvbnN0IHJvb3REb21haW4gPSBkb21haW5OYW1lLnNwbGl0KCcuJykuc2xpY2UoLTIpLmpvaW4oJy4nKTsgLy8gdmVyeSBiYXNpYyBoZXVyaXN0aWMsIGFkanVzdCBpZiB1c2luZyBzdWIuc3ViLmRvbWFpblxuXG4gICAgICAgIGNvbnN0IHpvbmUgPSByb3V0ZTUzLkhvc3RlZFpvbmUuZnJvbUxvb2t1cCh0aGlzLCAnWm9uZScsIHtcbiAgICAgICAgICAgIGRvbWFpbk5hbWU6IHJvb3REb21haW4sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIDMuIFRMUyBDZXJ0aWZpY2F0ZVxuICAgICAgICAvLyBDbG91ZEZyb250IHJlcXVpcmVzIGNlcnRpZmljYXRlcyBpbiB1cy1lYXN0LTFcbiAgICAgICAgY29uc3QgY2VydGlmaWNhdGUgPSBuZXcgYWNtLkNlcnRpZmljYXRlKHRoaXMsICdTaXRlQ2VydGlmaWNhdGUnLCB7XG4gICAgICAgICAgICBkb21haW5OYW1lOiBkb21haW5OYW1lLFxuICAgICAgICAgICAgdmFsaWRhdGlvbjogYWNtLkNlcnRpZmljYXRlVmFsaWRhdGlvbi5mcm9tRG5zKHpvbmUpLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyA0LiBDbG91ZEZyb250IERpc3RyaWJ1dGlvblxuICAgICAgICBjb25zdCBkaXN0cmlidXRpb24gPSBuZXcgY2xvdWRmcm9udC5EaXN0cmlidXRpb24odGhpcywgJ1NpdGVEaXN0cmlidXRpb24nLCB7XG4gICAgICAgICAgICBkZWZhdWx0QmVoYXZpb3I6IHtcbiAgICAgICAgICAgICAgICBvcmlnaW46IG5ldyBvcmlnaW5zLlMzT3JpZ2luKHNpdGVCdWNrZXQpLFxuICAgICAgICAgICAgICAgIHZpZXdlclByb3RvY29sUG9saWN5OiBjbG91ZGZyb250LlZpZXdlclByb3RvY29sUG9saWN5LlJFRElSRUNUX1RPX0hUVFBTLFxuICAgICAgICAgICAgICAgIGNhY2hlUG9saWN5OiBjbG91ZGZyb250LkNhY2hlUG9saWN5LkNBQ0hJTkdfT1BUSU1JWkVELFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbWFpbk5hbWVzOiBbZG9tYWluTmFtZV0sXG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZTogY2VydGlmaWNhdGUsXG4gICAgICAgICAgICBlcnJvclJlc3BvbnNlczogW1xuICAgICAgICAgICAgICAgIC8vIFNQQSBGYWxsYmFjazogUmVkaXJlY3QgNDAzIChTMyBkZWZhdWx0IGZvciBtaXNzaW5nIGtleSkgYW5kIDQwNCB0byBpbmRleC5odG1sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBodHRwU3RhdHVzOiA0MDMsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSHR0cFN0YXR1czogMjAwLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVBhZ2VQYXRoOiAnL2luZGV4Lmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICB0dGw6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDApLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBodHRwU3RhdHVzOiA0MDQsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSHR0cFN0YXR1czogMjAwLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVBhZ2VQYXRoOiAnL2luZGV4Lmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICB0dGw6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDApLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVmYXVsdFJvb3RPYmplY3Q6ICdpbmRleC5odG1sJyxcbiAgICAgICAgICAgIGNvbW1lbnQ6IGBQb3J0Zm9saW8gJHtlbnZpcm9ubWVudH0gZGlzdHJpYnV0aW9uYCxcbiAgICAgICAgICAgIG1pbmltdW1Qcm90b2NvbFZlcnNpb246IGNsb3VkZnJvbnQuU2VjdXJpdHlQb2xpY3lQcm90b2NvbC5UTFNfVjFfMl8yMDIxLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyA1LiBETlMgQSBSZWNvcmRcbiAgICAgICAgbmV3IHJvdXRlNTMuQVJlY29yZCh0aGlzLCAnU2l0ZUFsaWFzUmVjb3JkJywge1xuICAgICAgICAgICAgcmVjb3JkTmFtZTogZG9tYWluTmFtZSxcbiAgICAgICAgICAgIHRhcmdldDogcm91dGU1My5SZWNvcmRUYXJnZXQuZnJvbUFsaWFzKG5ldyB0YXJnZXRzLkNsb3VkRnJvbnRUYXJnZXQoZGlzdHJpYnV0aW9uKSksXG4gICAgICAgICAgICB6b25lOiB6b25lLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyA2LiBPdXRwdXRzXG4gICAgICAgIHRoaXMuZGlzdHJpYnV0aW9uSWQgPSBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnRGlzdHJpYnV0aW9uSWQnLCB7XG4gICAgICAgICAgICB2YWx1ZTogZGlzdHJpYnV0aW9uLmRpc3RyaWJ1dGlvbklkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDbG91ZEZyb250IERpc3RyaWJ1dGlvbiBJRCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnVja2V0TmFtZSA9IG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdCdWNrZXROYW1lJywge1xuICAgICAgICAgICAgdmFsdWU6IHNpdGVCdWNrZXQuYnVja2V0TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUzMgQnVja2V0IE5hbWUnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNpdGVVcmwgPSBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnU2l0ZVVybCcsIHtcbiAgICAgICAgICAgIHZhbHVlOiBgaHR0cHM6Ly8ke2RvbWFpbk5hbWV9YCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIFVSTCBvZiB0aGUgZGVwbG95ZWQgc2l0ZScsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
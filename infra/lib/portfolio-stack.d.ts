import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
export interface PortfolioStackProps extends cdk.StackProps {
    environment: 'staging' | 'prod';
    domainName: string;
    hostedZoneId?: string;
}
export declare class PortfolioStack extends cdk.Stack {
    readonly distributionId: cdk.CfnOutput;
    readonly bucketName: cdk.CfnOutput;
    readonly siteUrl: cdk.CfnOutput;
    constructor(scope: Construct, id: string, props: PortfolioStackProps);
}

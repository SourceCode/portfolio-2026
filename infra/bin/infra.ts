#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioStack } from '../lib/portfolio-stack';

const app = new cdk.App();

const projectName = app.node.tryGetContext('project_name') || 'portfolio-2026';
const stagingDomain = app.node.tryGetContext('staging_domain') || 'staging.ryanrentfro.com';
const prodDomain = app.node.tryGetContext('prod_domain') || 'ryanrentfro.com';

// AWS Account/Region
const env: cdk.Environment = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || 'us-east-1'
};

// Staging Stack
const stagingStack = new PortfolioStack(app, 'StagingStack', {
    stackName: `${projectName}-staging`,
    environment: 'staging',
    domainName: stagingDomain,
    env,
});

cdk.Tags.of(stagingStack).add('Project', projectName);
cdk.Tags.of(stagingStack).add('Environment', 'staging');
cdk.Tags.of(stagingStack).add('Owner', 'Ryan Rentfro');

// Production Stack
const prodStack = new PortfolioStack(app, 'ProdStack', {
    stackName: `${projectName}-prod`,
    environment: 'prod',
    domainName: prodDomain,
    env,
});

cdk.Tags.of(prodStack).add('Project', projectName);
cdk.Tags.of(prodStack).add('Environment', 'production');
cdk.Tags.of(prodStack).add('Owner', 'Ryan Rentfro');

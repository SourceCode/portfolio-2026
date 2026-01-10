# Deployment Guide

This guide explains how the **Portfolio 2026** project is deployed to AWS using CDK and GitLab CI/CD.

## 1. Architecture Overview

We use **Pattern A: Static Site Hosting** for high performance and low maintenance.

*   **AWS S3**: Stores the built static assets (HTML, CSS, JS, Images).
*   **AWS CloudFront**: Global Content Delivery Network (CDN) to serve the site with low latency and HTTPS.
*   **AWS Route 53**: Manages the DNS records (`ryanrentfro.com`).
*   **AWS ACM**: Provides the free SSL/TLS certificate for HTTPS.
*   **GitLab CI/CD**: Orchestrates the build and deployment process.

## 2. One-Time Setup (Prerequisites)

### A. AWS Setup
1.  **Create IAM OIDC Provider**:
    *   Go to IAM > Identity providers > Add provider.
    *   Type: `OpenID Connect`.
    *   Provider URL: `https://gitlab.com` (or your self-hosted instance).
    *   Audience: `https://gitlab.com`.
2.  **Create IAM Role for Deployment**:
    *   Create a role named `GitLabRunnerRole` (or similar).
    *   **Trust Relationship**:
        ```json
        {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Principal": {
                "Federated": "arn:aws:iam::YOUR_ACCOUNT_ID:oidc-provider/gitlab.com"
              },
              "Action": "sts:AssumeRoleWithWebIdentity",
              "Condition": {
                "StringLike": {
                  "gitlab.com:sub": "project_path:YOUR_GITLAB_USERNAME/portfolio-2026:*"
                }
              }
            }
          ]
        }
        ```
    *   **Permissions**: Attach `AdministratorAccess` (easiest for CDK) or a scoped policy covering CloudFormation, S3, CloudFront, Route53, ACM, and IAM (pass role).
3.  **Bootstrap CDK** (First time only per region):
    *   Run locally: `npx cdk bootstrap aws://YOUR_ACCOUNT_ID/us-east-1 --profile your-profile`
    *   Or let the pipeline do it (requires appropriate permissions).

### B. GitLab Setup
1.  Go to **Settings > CI/CD > Variables**.
2.  Add the following variables (Protected, Masked):
    *   `AWS_ROLE_ARN`: The ARN of the role created above (e.g., `arn:aws:iam::123456789012:role/GitLabRunnerRole`).
    *   `AWS_REGION`: `us-east-1`

### C. Domain Setup
1.  Ensure you have a **Hosted Zone** in Route 53 for `ryanrentfro.com`.
2.  Update `infra/cdk.json` with the correct domain names if they differ from the defaults.

## 3. How Deployments Work

The pipeline (`.gitlab-ci.yml`) is triggered by git activity:

### Staging (`development` branch)
1.  **Commit** pushed to `development`.
2.  **Test**: Runs linting and typechecking.
3.  **Build**: Vite builds the app to `/dist`.
4.  **Deploy**:
    *   Authenticates via OIDC.
    *   Runs `cdk deploy StagingStack`.
    *   Syncs `/dist` to the S3 Bucket.
    *   Invalidates CloudFront cache.

### Production (`main` branch)
1.  **Merge Request** merged to `main`.
2.  Steps 1-3 same as Staging.
3.  **Deploy**:
    *   **Manual Trigger Required**: You must click "Play" on the `deploy_prod` job in GitLab.
    *   Deploys `ProdStack` to `ryanrentfro.com`.

## 4. Where to Review AWS Resources

*   **CloudFormation**: Search for stacks `portfolio-2026-staging` or `portfolio-2026-prod`.
    *   *Events tab*: See deployment progress.
    *   *Outputs tab*: See S3 Bucket Name and CloudFront URL.
*   **S3**: Bucket named `portfolio-2026-prod-assets` (or similar).
*   **CloudFront**: Click the ID from outputs. View "Invalidations" to see recent deploy clears.
*   **Route 53**: Hosted Zone `ryanrentfro.com`. Look for 'A' records pointing to CloudFront.

**AWS CLI Commands**:
```bash
# List buckets
aws s3 ls

# Get CloudFront Distro Status
aws cloudfront get-distribution --id <DIST_ID>
```

## 5. Logging & Debugging

*   **Deployment Failures**: Check GitLab Job Logs.
    *   *Error: Access Denied*: Check IAM Role Trust Policy and OIDC setup.
    *   *Error: Limit Exceeded*: Check AWS Service Quotas (e.g., max CloudFront distros).
*   **Runtime Errors (404/403)**:
    *   If `index.html` loads but assets fail, check paths in `vite.config.ts`.
    *   Check CloudFront "Error pages" configuration in the Console.

## 6. Domain Configuration

### Route 53 (Recommended)
The CDK stack assumes you use Route 53. It:
1.  Propagates the Name Servers (NS) if you bought the domain via Route 53.
2.  Creates the ACM Certificate automatically.
3.  Validates it via DNS (automatic if Zone exists).
4.  Creates the Alias record.

**Status Check**:
```bash
dig ryanrentfro.com
# Should return CloudFront IP addresses
```

## 7. Rollback Procedures

### Automated (GitLab)
1.  Go to **Build > Pipelines**.
2.  Find the **last successful pipeline**.
3.  Click **Re-run** on the `deploy` job.
    *   *Note*: This rebuilds the code from that commit and re-uploads it.

### Manual (AWS Console)
1.  **Code Rollback**:
    *   Find the previous version of files in S3 (if versioning enabled) - *Note: Our stack uses sync --delete, so S3 is overwritten unless Versioning is ON. For safety, rely on Git pipeline re-run.*
2.  **Infrastructure Rollback**:
    *   Go to CloudFormation.
    *   Select Stack.
    *   Ideally, use Git to revert `infra/` changes and redeploy. CloudFront/S3 config changes should be code-driven.

## 8. Deleting the Deployment

To destroy everything and stop billing:

1.  **Via Pipeline** (Advanced): Create a destruction job (not included by default for safety).
2.  **Via Local Machine**:
    ```bash
    cd infra
    npx cdk destroy StagingStack
    npx cdk destroy ProdStack
    ```
3.  **Via Console**:
    *   Go to **CloudFormation**.
    *   Select Stack -> **Delete**.
    *   *Note*: The S3 bucket has `autoDeleteObjects: true` in the CDK code, so it will empty and delete itself. If this was set to `RETAIN`, you would need to empty it manually first.

## 9. Local Development
To run CDK diffs locally:
1.  `npm install` in root and `/infra`.
2.  Configure AWS Profile (`~/.aws/credentials`).
3.  `cd infra`
4.  `npx cdk diff StagingStack --profile your-profile`

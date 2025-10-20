

# AWS CLI commands
### To see saved profiles:
aws configure list-profiles

### To see which profile is active:
aws configure list

### To switch between different AWS accounts, set the AWS_profile environment variable at the command line:
export AWS_PROFILE=personal
or
export AWS_PROFILE=kakapolabs

### link it to the right git repo
Update the default repo name in cloudformation template.

### To create the stack:
./createPipeline.sh <lowercasestackname> <GitHubBranch> <StageName>
eg
./createPipeline.sh dailymail main production eu-west-2

### After the pipeline has been created, you will need to manually update the Codestar connection that links it to github.
When running the pipeline for the first time, it will create a pending Codestar connection. This needs to be manually linked to github.
- go to the codepipeline console
- settings > connections
- find the pending connection that has been created
- update the pending connection by linking it to github
- go back to the pipeline and release the change

### If its not deploying:
If the repo isn't deploying into the pipeline, check that the "AWS Connector for GitHub" in github has access to the repo. Head to your GitHub account: Go to Settings > Applications > Installed GitHub Apps. Find the AWS Connector for GitHub (or similar name). Click it, and review the repositories it's authorized for.

### To update the stack:
do a git push!

### To update via CLI for any reason:
aws cloudformation update-stack --stack-name dailymail --template-body file://cloudFormation.yml

### To delete the stack:
./deletePipeline dailymail


### Add necessary values to a local cloudformationOutputs.ts
These are the IDs of resources that get created during the build process. So that they can be referenced locally, create a cloudformationOutputs.ts file in the src/utils folder of any web app and add in the necessary values.

### Setting up the cloudfront distribution
tbc

#!/bin/bash


# check that the script gets passed three parameters: <lowercasestackname> <GitHubBranch> <StageName>
if [ "$#" -ne 3 ]; then
  echo "Usage: ./createPipeline.sh <lowercasestackname> <GitHubBranch> <StageName>"
  exit 1
else
  echo "All parameters included. Running the script with stack name: $1, GitHub branch: $2, and Stage name: $3"


  # This splits cloudFormation file into 2 parts based on the delimeter 'END OF PIPLEINE TEMPLATE'
  # and creates files called cloudFormationPart00 and cloudFormationPart01
  # ready to be used by the aws cloudfomation command below
  csplit -s -f cloudFormationPart cloudFormation.yml  "/END OF PIPELINE TEMPLATE/"


  aws cloudformation create-stack \
    --stack-name $1 \
    --template-body file://cloudFormationPart00 \
    --capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
    --parameters ParameterKey=GitHubBranch,ParameterValue=$2 \
                ParameterKey=StageName,ParameterValue=$3 \

  rm cloudFormationPart00
  rm cloudFormationPart01

fi





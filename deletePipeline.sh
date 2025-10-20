#!/bin/bash
if [ -z "$1" ]
  then
    echo "usage ./deletePipeline.sh <STACK NAME>"
    exit 
fi
aws cloudformation delete-stack --role-arn arn:aws:iam::426106272207:role/deleteStack --stack-name $1
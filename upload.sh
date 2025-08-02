#!/usr/bin/env bash

DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -ex

# rclone sync dist/ CLOUD_NAME:/BUCKET_NAME/

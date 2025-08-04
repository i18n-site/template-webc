#!/usr/bin/env bash

DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -ex

init() {
  if [ -d "$1" ]; then
    if [ -d "$1/.git" ]; then
      cd $1
      git pull origin dev
      cd $DIR
    fi
  else
    git clone -b dev --depth=1 $2 $1
  fi
}

init sh https://github.com/i18n-site/template-webc-sh.git
./sh/init.sh

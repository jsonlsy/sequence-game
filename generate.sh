#!/bin/bash

# generate client
rm -rf ./client
rsync -ar --exclude=node_modules --exclude=.vscode --exclude=.gitignore ../sequence-client/ ./client

# generate server
rm -rf ./server
rsync -ar ../sequence-server/src/ ./server
rsync ../sequence-server/package.json ./
rsync ../sequence-server/.babelrc ./

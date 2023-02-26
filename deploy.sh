#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place -nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A 
git commit -m 'deploy'

# if you are de´loyong to thhp://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>.github.io.git main

# if you deploying to http://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:BrandonS01M/FlexC.git main:gh-pages

cd -
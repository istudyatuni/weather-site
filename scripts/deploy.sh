#!/bin/sh
set -e

export LANG=en_US.utf-8

repo="https://github.com/istudyatuni/weather-site"
hash=$(git rev-parse HEAD)
branch=$(git rev-parse --abbrev-ref HEAD)
datetime=$(date -R -u)

# build
yarn build; echo

# commit
git checkout gh-pages
trap "echo -e '\nExiting\n' && git checkout $branch" EXIT

rm -rf docs
mv build docs

echo $datetime > docs/version.txt

# I don't want to store key in master
cp ../key.txt docs/key.txt

git add -f docs; echo

git commit --amend -m "Update on $datetime

Commit $repo/tree/$hash, branch '$branch'"

git checkout $branch
trap "echo -e '\nExiting\n'" EXIT

# push
echo; git push -f origin gh-pages

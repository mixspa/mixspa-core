#! bin/bash
set -e -u

CURRENT_VERSION=`cat package.json | jq -r .version`

echo 'Publish package to git ...'

echo 'Config git'
name=$(git log -1 --pretty=format:"%an")
email=$(git log -1 --pretty=format:"%ae")
git config user.name "$name"
git config user.email "$email"

echo 'Prepare git env'
git fetch --tags
if [ `git branch | grep tmp-release` ]; then
    git branch -D tmp-release
fi
git checkout -b tmp-release

echo 'Commit & push package files'
git add -f lib/
git commit -m "Release v$CURRENT_VERSION"
git tag "v$CURRENT_VERSION"
git push --tags

echo 'Clean git env'
git checkout master
git branch -D tmp-release
echo 'Publish package to git done'

#! bin/bash
set -e -u

CURRENT_VERSION=`cat package.json | jq -r .version`

echo 'Publish package to npm ...'
yarn publish --new-version $CURRENT_VERSION --access public
echo 'Publish package to npm done'

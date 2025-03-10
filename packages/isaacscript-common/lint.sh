#!/bin/bash

set -e # Exit on any errors

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

SECONDS=0

cd "$DIR"

# Step 1 - Use Prettier to check formatting.
npx prettier --ignore-path="$DIR/../../.prettierignore" --check .

# Step 2 - Use ESLint to lint the TypeScript.
# We use "--max-warnings" so that any warnings will fail in CI.
npx eslint --max-warnings 0 .

# Step 3 - Spell check every file using CSpell.
# We use no-progress and no-summary because we want to only output errors.
npx cspell --no-progress --no-summary

# Step 4 - Check for unused exports
# The "--error" flag makes it return an error code of 1 if unused exports are found.
# We ignore exports defined in the index.ts file since those are intended to be consumed by
# end-users.
npx ts-prune --error --ignore index.ts

# Step 5 - Validate that every doc page is included.
npx ts-node --require "tsconfig-paths/register" "$DIR/scripts/docsEntryPointLint.ts"

echo "Successfully linted in $SECONDS seconds."

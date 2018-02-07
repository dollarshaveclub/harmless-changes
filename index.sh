#!/usr/bin/env bash

# Detect Harmless Changes
# created by: @briangonzalez
# ---
# exits early if only 'harmless changes' were made

if [ -z "$1" ]    
  then    
  BRANCH = "master"
else 
  BRANCH = $1
fi

if [[ $CIRCLE_BRANCH == $BRANCH || $TRAVIS_BRANCH == $BRANCH ]]; then
  exit 1
fi


if [[ ! -a .ciignore ]]; then
  echo "Harmless Changes: exiting: no .ciignore file detected ❗️"
  exit 1 # If .ciignore doesn't exists, just quit
fi

# Load in every file that is different than master
changes=( `git diff-tree --no-commit-id --name-only -r origin/master..HEAD` )

# Load the patterns we want to skip into an array
mapfile -t blacklist < .ciignore

for i in "${blacklist[@]}"
do
  # Remove the current pattern from the list of changes
  changes=( ${changes[@]/$i/} )

  if [[ ${#changes[@]} -eq 0 ]]; then
    # If we've exhausted the list of changes before we've finished going
    # through patterns, that's okay, just quit the loop
    break
  fi
done

if [[ ${#changes[@]} -gt 0 ]];
then
  # If there's still changes left, then we have stuff to build, leave the commit alone.
  echo "Harmless Changes: potentially harmful changes detected based on .ciignore 👀"
  exit 1
else
  # Otherwise, consider it harmless
  echo "Harmless Changes: exiting: no harmless changes detected based on .ciignore 🎉"
  exit 0
fi

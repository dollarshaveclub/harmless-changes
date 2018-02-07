# Harmless Changes

Harmless changes is a simple bash script that helps ignore unneeded build steps if code changes are harmless. This utility can speed up CI build times! 🏎 💨

⚠️  **NOTE:** This code is currently untested. Tests are in progress! 

---

<p align="center">
  <a href="#summary">Summary</a>&nbsp;&nbsp;
  <a href="#install">Install</a>&nbsp;&nbsp;
  <a href="#use">Use</a>&nbsp;&nbsp;
  <a href="#contributing">Contributing</a>&nbsp;&nbsp;
  <a href="#thanks">Thanks</a>
</p>

---

## Summary

CI build steps can test many things, but what if the Pull Request to a `master` branch contains only for changes to a repository's README or a slight change to an image? Harmless Changes checks if the **only** changes that were made within a Pull Request were for items that can be ignored in CI via a `.ciingore` file. CI build steps can be exited if the Harmless Changes script finds that only files within the `.ciignore` file were ignored.

----

## Install

Clone:
```
git clone git@github.com:dollarshaveclub/harmless-changes.git
```
NPM 
```
npm i harmless-changes --save-dev
```

----

## Use

The documentation below provides steps to using harmless changes

### Make a `.ciignore`

The `.ciignore` file is used to ingore certain files during the ci (build) process

In a terminal:
```bash
touch .ciignore
```

### Check if changes are harmless

With CI build steps in **[CircleCI]()** or **[Travis]()**, configure CI to work according to whether harmless exits with a 1 or 0.

Add a script to run harmless changes, in example:

```bash
if npx harmless-changes; then
  exit 0
 fi

# or 
# if an older version of NPM is being used
if ./node_modules/.bin/harmless-changes; then
 exit 0
fi

# or, finally
# if Harmless Changes has not been installed with NPM (the code below is an assumed path)
if ./harmless-changes.sh; then
  exit 0
fi
```

CI will/can now exit if only harmless changes were made.

----

## Contributing

Please contribute to Harmless Changes by filing an [issue](/issues),responding to issues, or reaching out socially—etc.

Harmless Changes is a utility. It may not be beneficial to many repositories if builds are simple. However, as test grow, and project builds become more complex, Harmless Changes is a simple tool that can save lots of time!

----

## Thanks

This utility was thought up and made for [Dollar Shave Club](https://www.dollarshaveclub.com/home) by [Brian Gonzalez](https://github.com/briangonzalez/) and [Jon Ong](https://github.com/jonathanong) while the team was implementing continuous integration. Along with [CircleCi](https://circleci.com/), [ES Check](https://www.npmjs.com/package/es-check), [gh-automerge](https://github.com/jonathanong/gh-automerge), [Greenkeeper](https://greenkeeper.io/), [Jest](https://facebook.github.io/jest/) and [Mocha](https://mochajs.org/), Harmless Changes is a utility that Dollar Shave Club has used to save the company many engineer hours per week with fast builds. 



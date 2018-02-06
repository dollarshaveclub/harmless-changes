# Harmless Changes

Harmless changes is a simple bash script that ingores tests if repository changes are harmless. This can greatly speed up repository build times by ignore unneedded tests and other build steps.

---

<p align="center">
  <a href="#install">Install</a>&nbsp;&nbsp;
  <a href="#install">Use</a>&nbsp;&nbsp;
  <a href="#contributing">Contributing</a>&nbsp;&nbsp;
  <a href="#thanks">Thanks</a>
</p>

---

## Install

Clone:
```
git clone git@github.com:dollarshaveclub/harmless-changes.git
```
NPM 
```
npm i harmless-changes --save-dev
```

## Use

The documentation below provides steps to using harmless changes

### Make a `.ciignore`

The `.ciignore` file is used to ingore certain file in the ci (build) process

In a terminal:
```bash
touch .ciignore
```

### Check if changes are harmless

With ci or build steps, configure ci to working according to whether harmless changes returns `true` or `false`.

## Contributing

Please contribute to Harmless Changes by filing an [issue](/issues),responding to issues, or reaching out socially—etc.

Harmless Changes is a utility. It may not be beneficial to many repositories if builds are simple. However, as test grow, and project builds become more complex, Harmless Changes is a simple tool that can save lots of time!

## Thanks

This utility was thought up and made for [Dollar Shave Club](https://www.dollarshaveclub.com/home) by [Brian Gonzalez](https://github.com/briangonzalez/) and [Jon Ong](https://github.com/jonathanong) while the team was implementing continuous integration. Along with [CircleCi](https://circleci.com/), [ES Check](https://www.npmjs.com/package/es-check), [gh-automerge](https://github.com/jonathanong/gh-automerge), [Greenkeeper](https://greenkeeper.io/), [Jest](https://facebook.github.io/jest/) and [Mocha](https://mochajs.org/), Harmless Changes is a utility that Dollar Shave Club has used to save the company many engineer hours per week with fast builds. 



# react-web-ui-kit
A starter kit for a Holochain react based web UIs

## Overview
At the moment this repo serves as a talking point for deciding on best practices for writing react web UIs for core holochain/holo web apps. Such discussion points include:

- Directory structure
- Build system
- Testing tools and style
- CI
- Core depencies
- Code Linting style
- UI Styling
- Holochain integration
- Supporting composability (UI and holochain)

The goals of developing such a standard are to:

- Make starting new projects simple and quick
- Develop reusable components
- Make it simple to work on many projects
- Provide a consistent style for users across multiple apps

## Current State
The code in the repo currently is a stripped back version of what we are using in holochain-ui. It is the following features:

- Separate build systems for holochain zomes and react-ui
- 100% typescript
- Jest as a test framework, runner and coverage
- tslint as linter with standard-js style (for typescript)
- Storybook for documentation and component development
- Type safe redux store and actions/reducers
- holochainAxiosActions for easily generating fully typed holochain actions (replaces middleware)
- Consistent styling throughout using material-ui and withRoot

There is also more to come from holochain-ui such as CI using travis and docker.



## Contributing

To suggest a change please start an issue or a PR to get discussion happening
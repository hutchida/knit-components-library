# Component Library example using Storybook

This is an example of how to develop a component library using Storybook and publishing to NPM.

## Initial Setup

`npm install`

## Run Storybook

`npm run storybook`

Go ahead and create new react components, make changes to existing components, and check how they look using Storybook. When ready, go ahead and publish to npm.

## Login to npm

If you're not already logged in to npm through the command line, run the below command:

`npm login`

You should only need to login once. If you don't yet have a NPM account go to www.npmjs.com to create one first.

## Publish to npm

In order to publish your component library to npm the version number in the package.json needs to be incremented, else you will receive an error. When the version number is unique, go ahead and run

`npm publish`

## What next?

Now in your UI codebase you can reference the package you created on NPM as a dependency. You should reference the package version you wish to install (probably the latest one in most cases) to see the latest changes to the library in your UI. See the example knit-ui repo for more information.

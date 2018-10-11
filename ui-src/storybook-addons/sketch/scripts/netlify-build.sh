#!/bin/sh

# Make sure to set $BUILD_CONTEXT in the Netlify "Deploy Settings"
echo "Building for Netlify. BUILD_CONTEXT: $BUILD_CONTEXT"

# Fixes
npm i -g process-nextick-args util-deprecate gauge

yarn
yarn bootstrap --core

if [ "$BUILD_CONTEXT" = "DOCS" ]; then
  pushd docs
  yarn install
  popd
  yarn docs:build
  mv docs/public netlify-build
elif [ "$BUILD_CONTEXT" = "CRA" ]; then
  pushd examples/cra-kitchen-sink
  yarn add tapable # quirk with netlify build instance
  yarn build-storybook
  mv storybook-static ../../netlify-build
  popd
elif [ "$BUILD_CONTEXT" = "VUE" ]; then
  echo "netlify-build Vue examples"
  pushd examples/vue-kitchen-sink
  yarn
  yarn build-storybook
  mv storybook-static ../../netlify-build
  popd
elif [ "$BUILD_CONTEXT" = "ANGULAR" ]; then
  echo "netlify-build Angular examples"
  pushd examples/angular-cli
  yarn
  yarn build-storybook
  mv storybook-static ../../netlify-build
  popd
elif [ "$BUILD_CONTEXT" = "POLYMER" ]; then
  echo "netlify-build Polymer examples"
  pushd examples/polymer-cli
  yarn
  yarn build-storybook
  mv storybook-static ../../netlify-build
  popd
elif [ "$BUILD_CONTEXT" = "OFFICIAL" ]; then
  echo "netlify-build official examples"
  pushd examples/official-storybook
  yarn
  yarn build-storybook
  mv storybook-static ../../netlify-build
  popd
else
  RED='\033[0;31m'
  NOCOLOR='\033[0m'
  echo "Unrecognized BUILD_CONTEXT \"${RED}$BUILD_CONTEXT${NOCOLOR}\"" 1>&2
fi

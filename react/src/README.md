# Directory Structure Guide

- `api` is where the actual Yidhra distributable components live and are exported from, see `npm run build` for more info
- `storybook` contains top-level documentation stories, example template stories and also helpers used by the Storybook
- `style` contains the SCSS source code for our custom Bootstrap theme
- `test` contains test helpers used by the `*.test.js` files in the `api` directory

Therefore, nothing outside of `api` really matters at all for using Yidhra!

There is no React app here... All development takes place in the Storybook!

## Bro, what's a molecule?

[RTFM](http://atomicdesign.bradfrost.com/)

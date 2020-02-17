# Directory Structure Guide

- `api` is where the actual Yidhra distributable components live and are exported from, see `npm run dist` for more info
- `components` is where misc components used only in this sandbox app live
- `dist` is where the generated package code goes when `npm run dist` is executed 
- `pages` ditto above for misc pages used only in this sandbox React app
- `style` contains the SCSS source code for our custom bootstrap theme
- `test` contains test helpers used by the `*.test.js` files in the `api` directory
- `util` contains misc helpers used by the Storybook

Therefore, nothing outside of `api` really matters at all for using Yidhra. This entire React app is really just where
we develop and test the components as well as where we generate the storybook from, it's not meant to ever be run non-locally.

## Bro, what's a molecule?

[RTFM](http://atomicdesign.bradfrost.com/)

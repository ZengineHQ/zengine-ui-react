# Yidhra React

> React atomic design Components for Yidhra.

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](http://wizehive.github.io/yidhra/) 

## Installation

```
npm install @zenginehq/yidhra-react
```

## Usage

```
// Add `style.css` from a CDN or locally.
import 'style.css';

// Add Font Awesome icons.
<script src="https://kit.fontawesome.com/0cf0825a47.js" crossorigin="anonymous"></script>

// Use components.
import { Button, TextField, NumberField, YidhraForm } from '@zenginehq/yidhra-react';

function MyComponent() {
    const myCallback = values => {
        console.warn('submitted values', values); 
    };

    return (
        <YidhraForm onSubmit={myCallback}>
            <TextField name="firstName" label="First Name" required />
            <NumberField name="age" label="Age" required />
        </YidhraForm>
    );
}
```

For more information see the Storybook

## Explanation of NPM scripts 

- `start`: starts the local dev version of the Storybook
- `test`: starts the Jest interactive test runner
- `test:save`: runs tests in CI mode (non-interactive just run all tests once) and logs output to a file
- `test:cover`: runs tests in CI mode (see test:save) and generates code a coverage report (only considers `api` folder) 
- `build-storybook`: runs tests to generate the log output and builds the Storybook
- `deploy-storybook`: deploys the Storybook to Github Pages
- `scss`: compiles SCSS from the `style` folder
- `scss:watch`: watches the `style` folder and recompiles SCSS when files change
- `build`: builds the redistributable output for Yidhra; this is what people will get when they `npm install` this in their projects

## Directory Structure Guide

- `.cache` is an internal directory used by React, ignore it
- `.storybook` contains Storybook configuration
- `dist` is where the generated package code goes when `npm run build` is executed; this directory won't exist unless you've run the command
- `public` contains static assets to be served with the Storybook
- `src` contains the actual Yidhra source code
- `storybook-static` is where the generated Storybook code when `npm run build-storybook` is executed; this directory won't exist unless you've run the command

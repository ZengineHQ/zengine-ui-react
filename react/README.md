# Yidhra React

> React atomic design Components for Yidhra.

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://github.com/Wizehive/yidhra) 

## Installation

```
npm install @zenginehq/yidhra-react
```

## Usage

```
// Add `yidhra.css` from a CDN or locally.
import 'yidhra.css';

// Add Font Awesome icons.
<script src="https://kit.fontawesome.com/0cf0825a47.js" crossorigin="anonymous"></script>

// Use components.
import { Button, TextInput, NumberInput, YidhraForm } from '@zenginehq/yidhra-react';

function MyComponent() {
    const myCallback = values => {
        console.warn('submitted values', values); 
    };

    return (
        <YidhraForm onSubmit={myCallback}>
            <TextInput name="firstName" label="First Name" required />
            <NumberInput name="age" label="Age" required />
        </YidhraForm>
    );
}
```

## Explanation of NPM scripts

- `start`: starts the local version of the sandbox app
- `test`: runs the Jest interactive test runner
- `test:save`: runs tests in CI mode (non-interactive just run all tests once) and logs output to a file
- `storybook`: starts the local dev version of the Storybook
- `build-storybook`: runs tests to generate the log output and builds the Storybook
- `deploy-storybook`: deploys the Storybook to Github Pages
- `cover`: runs tests in CI mode (see test:save) and generates code a coverage report (only considers `api` folder) 
- `dist`: builds the redistributable output for Yidhra; this is what people will get when they `npm install`

# Yidhra React

> React atomic design Components for Yidhra.

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://github.com/Wizehive/yidhra) 

## Installation

```
npm install @zenginehq/yidhra-react
```

## Usage

```
// Make sure to add Yihdra `styles.css` from a CDN or locally.   

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


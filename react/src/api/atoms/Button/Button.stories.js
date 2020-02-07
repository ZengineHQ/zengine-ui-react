import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    jest: ['Button.test.js'],
  },
};

export const Default = () => <Button onClick={ action('clicked') }>Default Button</Button>;

export const Primary = () => (
  <Button theme="primary" onClick={ action('clicked') }>
    Primary Button
  </Button>
);

export const Subdued = () => (
  <Button theme="subdued" onClick={ action('clicked') }>
    Subdued Button
  </Button>
);

export const Disabled = () => (
  <Button disabled={ true } onClick={ action('clicked') }>
    Disabled Button
  </Button>
);

export const CustomClasses = () => (
  <Button classes="foo" onClick={ action('clicked') }>
    Custom classes button
  </Button>
);

export const StyleGuide = () => (
  <>
    <table>
      <tbody>
      <tr>
        <td><Button>Default Button</Button></td>
        <td><Button classes="hover">Default Button Hovered</Button></td>
        <td><Button classes="focus">Default Button Focused</Button></td>
        <td><Button classes="active">Default Button Active</Button></td>
        <td><Button disabled>Default Button Disabled</Button></td>
      </tr>
      <tr>
        <td><Button theme="primary">Primary Button</Button></td>
        <td><Button theme="primary" classes="hover">Primary Button Hovered</Button></td>
        <td><Button theme="primary" classes="focus">Primary Button Focused</Button></td>
        <td><Button theme="primary" classes="active">Primary Button Active</Button></td>
        <td><Button theme="primary" disabled>Primary Button Disabled</Button></td>
      </tr>
      <tr>
        <td><Button theme="subdued">Subdued Button</Button></td>
        <td><Button theme="subdued" classes="hover">Subdued Button Hovered</Button></td>
        <td><Button theme="subdued" classes="focus">Subdued Button Focused</Button></td>
        <td><Button theme="subdued" classes="active">Subdued Button Active</Button></td>
        <td><Button theme="subdued" disabled>Subdued Button Disabled</Button></td>
      </tr>
      </tbody>
    </table>
  </>
);

export const Playground = () => {
  const themeOpts = {
    Default: '',
    Primary: 'primary',
    Subdued: 'subdued'
  };

  const typeOpts = {
    Button: 'button',
    Submit: 'submit',
    Reset: 'reset',
  };

  return (
    <Button
      disabled={ boolean('Disabled', false) }
      theme={ select('Theme', themeOpts, '') }
      onClick={ action('clicked') }
      type={ select('Type', typeOpts, 'button') }
      classes={ text('Classes', 'foo bar') }
    >
      { text('Label', 'Hello Friend') }
    </Button>
  );
};

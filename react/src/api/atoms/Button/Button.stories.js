import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import Button from './Button';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    jest: ['Button.test.js'],
  },
};

export const Default = () => <Button onClick={ action('clicked') }>Default Button</Button>;

export const Secondary = () => (
  <Button theme="secondary" onClick={ action('clicked') }>
    Secondary Button
  </Button>
);

export const Disabled = () => (
  <Button disabled={ true } onClick={ action('clicked') }>
    Disabled Button
  </Button>
);

export const StyleGuide = () => (
  <table>
    <caption>Hover over and click on the buttons to see their <em>hovered</em> and <em>active</em> states.</caption>
    <tbody>
    <tr>
      <td><Button>Primary</Button></td>
      <td><Button theme="secondary">Secondary</Button></td>
      <td><Button theme="success">Success</Button></td>
      <td><Button theme="danger">Danger</Button></td>
      <td><Button theme="warning">Warning</Button></td>
      <td><Button theme="info">Info</Button></td>
      <td><Button theme="light">Light</Button></td>
      <td><Button theme="dark">Dark</Button></td>
      <td><Button theme="link">Link</Button></td>
    </tr>
    </tbody>
  </table>
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  const themeOpts = {
    'Primary (default)': 'primary',
    Secondary: 'secondary',
    Success: 'success',
    Danger: 'danger',
    Warning: 'warning',
    Info: 'info',
    Light: 'light',
    Dark: 'dark',
    Link: 'link',
  };

  const typeOpts = {
    Button: 'button',
    Submit: 'submit',
    Reset: 'reset',
  };

  return (
    <Button
      disabled={ boolean('Disabled', false) }
      theme={ select('Theme', themeOpts, 'primary') }
      onClick={ action('clicked') }
      type={ select('Type', typeOpts, 'button') }
      classes={ text('Classes', 'foo bar') }
    >
      { text('Label', 'Hello Friend') }
    </Button>
  );
};

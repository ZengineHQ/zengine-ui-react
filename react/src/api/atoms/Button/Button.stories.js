import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    notes: 'This is a standard HTML button',
  },
};

export const Default = () => <Button onClick={action('clicked')}>Default Button</Button>;

export const Primary = () => (
  <Button theme="primary" onClick={action('clicked')}>
    Primary Button
  </Button>
);

export const Subdued = () => (
  <Button theme="subdued" onClick={action('clicked')}>
    Subdued Button
  </Button>
);

export const Disabled = () => (
  <Button disabled={true} onClick={action('clicked')}>
    Disabled Button
  </Button>
);

export const Playground = () => {
  const themeOpts = {
    Default: '',
    Primary: 'primary',
    Subdued: 'subdued',
  };

  return (
    <Button
      disabled={boolean('Disabled', false)}
      theme={select('Theme', themeOpts, '')}
      onClick={action('clicked')}
    >
      {text("Label", "Hello Friend")}
    </Button>
  );
};

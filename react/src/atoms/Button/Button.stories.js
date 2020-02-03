import React from 'react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [withInfo],
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
  <Button disabled={true}>
    Disabled Button
  </Button>
);

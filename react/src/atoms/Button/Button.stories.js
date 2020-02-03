import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
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

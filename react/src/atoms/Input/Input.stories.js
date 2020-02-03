import React from 'react';
import { withInfo } from '@storybook/addon-info';

import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  decorators: [withInfo],
  parameters: {
    notes: 'This is a standard HTML input',
  },
};

export const Default = () => <Input></Input>;

export const Required = () => <Input required={ true }></Input>;

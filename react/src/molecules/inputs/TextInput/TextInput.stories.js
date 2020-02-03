import React from 'react';
import { withInfo } from '@storybook/addon-info';

import TextInput from './TextInput';

export default {
  title: 'Molecules/Inputs/TextInput',
  component: TextInput,
  decorators: [withInfo],
  parameters: {
    notes: 'Use this to generate an HTML input with type set to text',
  },
};

export const Default = () => <TextInput label="Text Input"></TextInput>;

export const Required = () => <TextInput label="Required Text Input" required={true}></TextInput>;

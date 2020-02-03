import React from 'react';
import { withInfo } from '@storybook/addon-info';

import Label from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
  decorators: [withInfo],
  parameters: {
    notes: 'This is a standard HTML label',
  },
};

export const Default = () => <Label>Default Label</Label>;

export const Required = () => <Label required={ true }>Required Label</Label>;

export const CustomClasses = () => <Label classes="class-one class-two">Custom Classes Label</Label>;

export const ForElement = () => <Label for="foo-element">For Element Label</Label>;

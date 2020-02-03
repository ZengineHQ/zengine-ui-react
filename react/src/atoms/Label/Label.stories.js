import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import Label from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    notes: 'This is a standard HTML label. You probably will use this more often indirectly via Input molecules.',
  },
};

export const Default = () => <Label>Default Label</Label>;

export const Required = () => <Label required={ true }>Required Label</Label>;

export const CustomClasses = () => <Label classes="class-one class-two">Custom Classes Label</Label>;

export const ForElement = () => <Label for="foo-element">For Element Label</Label>;

export const Playground = () => (
  <Label
    for={ text('For', 'foo-element') }
    required={ boolean('Required', false) }
    classes={ text('Classes', 'class-one') }
  >
    { text('Label', 'Compelling Label') }
  </Label>
);

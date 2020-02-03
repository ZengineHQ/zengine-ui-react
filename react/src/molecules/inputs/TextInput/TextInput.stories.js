import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import TextInput from './TextInput';

export default {
  title: 'Molecules/Inputs/TextInput',
  component: TextInput,
  parameters: {
    notes: 'Use this to generate an HTML input with type set to text',
  },
};

export const Default = () => <TextInput label="Text Input"></TextInput>;

export const Required = () => <TextInput label="Required Text Input" required={true}></TextInput>;

export const Disabled = () => <TextInput label="Disabled Text Input" disabled={true}></TextInput>;

export const Placeholder = () => <TextInput label="Placeholder Text Input" placeholder="placeholder text"></TextInput>;

export const Playground = () => (
  <TextInput
    label={ text('Label', 'Input Label') }
    disabled={ boolean('Disabled', false) }
    required={ boolean('Required', false) }
    placeholder={ text('Placeholder', 'placeholder')}
  ></TextInput>
);

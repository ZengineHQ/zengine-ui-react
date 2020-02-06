import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import TextInput from './TextInput';
import { MockForm } from '../../../util/testing';

export default {
  title: 'Molecules/Inputs/TextInput',
  component: TextInput,
  parameters: {
    notes: 'Use this to generate an HTML input with type set to text',
  },
};

export const Default = () => <MockForm><TextInput label="Text Input" name="text" /></MockForm>;

export const Required = () => <MockForm><TextInput label="Required Text Input" required={true} name="text" /></MockForm>;

export const Disabled = () => <MockForm><TextInput label="Disabled Text Input" disabled={true} name="text" /></MockForm>;

export const Placeholder = () => <MockForm><TextInput label="Placeholder Text Input" placeholder="placeholder text" name="text" /></MockForm>;

export const Playground = () => (
  <MockForm>
    <TextInput
      label={ text('Label', 'Input Label') }
      disabled={ boolean('Disabled', false) }
      required={ boolean('Required', false) }
      placeholder={ text('Placeholder', 'placeholder')}
      name="text"
    />
  </MockForm>
);

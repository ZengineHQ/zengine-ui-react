import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export instead to get the Docs generated properly.
import { TextInput } from './TextInput';
import { MockForm } from '../../../../test/MockForm';

export default {
  title: 'Molecules/Inputs/TextInput',
  component: TextInput,
  parameters: {
    jest: ['TextInput.test.js'],
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

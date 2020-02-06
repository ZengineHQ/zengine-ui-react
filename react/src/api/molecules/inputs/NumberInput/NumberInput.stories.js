import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import NumberInput from './NumberInput';
import { MockForm } from '../../../util/testing';

export default {
  title: 'Molecules/Inputs/NumberInput',
  component: NumberInput,
  parameters: {
    notes: 'Use this to generate an HTML input with type set to number',
  },
};

export const Default = () => <MockForm><NumberInput label="Number Input" name="number"/></MockForm>;

export const Required = () => <MockForm><NumberInput label="Required Number Input" required={true} name="number" /></MockForm>;

export const Disabled = () => <MockForm><NumberInput label="Disabled Number Input" disabled={true} name="number" /></MockForm>;

export const Placeholder = () => <MockForm><NumberInput label="Placeholder Number Input" placeholder="placeholder number" name="number" /></MockForm>;

export const Playground = () => (
  <MockForm>
    <NumberInput
      name="foo"
      label={ text('Label', 'Input Label') }
      disabled={ boolean('Disabled', false) }
      required={ boolean('Required', false) }
      placeholder={ text('Placeholder', 'placeholder')}
    />
  </MockForm>
);

import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import NumberInput from './NumberInput';

export default {
  title: 'Molecules/Inputs/NumberInput',
  component: NumberInput,
  parameters: {
    notes: 'Use this to generate an HTML input with type set to number',
  },
};

export const Default = () => <NumberInput label="Number Input" />;

export const Required = () => <NumberInput label="Required Number Input" required={true} />;

export const Disabled = () => <NumberInput label="Disabled Number Input" disabled={true} />;

export const Placeholder = () => <NumberInput label="Placeholder Number Input" placeholder="placeholder number" />;

export const Playground = () => (
  <NumberInput
    label={ text('Label', 'Input Label') }
    disabled={ boolean('Disabled', false) }
    required={ boolean('Required', false) }
    placeholder={ text('Placeholder', 'placeholder')}
  />
);

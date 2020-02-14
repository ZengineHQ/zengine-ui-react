import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export instead of default to get the Storybooks Docs generated properly.
import { NumberInput } from './NumberInput';
import { MockForm } from '../../../test/MockForm';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'Molecules/NumberInput',
  component: NumberInput,
  parameters: {
    jest: ['NumberInput.test.js'],
  },
};

export const Default = () => <MockForm><NumberInput label="Number Input" name="number"/></MockForm>;

export const Required = () => <MockForm><NumberInput label="Required Number Input" required={true} name="number" /></MockForm>;

export const Disabled = () => <MockForm><NumberInput label="Disabled Number Input" disabled={true} name="number" /></MockForm>;

export const HelpText = () => <MockForm><NumberInput label="Number" help="This is some help text" name="number" /></MockForm>;

export const Placeholder = () => <MockForm><NumberInput label="Placeholder Number Input" placeholder="placeholder number" name="number" /></MockForm>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MockForm>
      <NumberInput
        name="foo"
        label={ text('Label', 'Input Label') }
        help={ text('Help Text', 'Follow these instructions wisely') }
        disabled={ boolean('Disabled', false) }
        required={ boolean('Required', false) }
        placeholder={ text('Placeholder', 'placeholder')}
      />
    </MockForm>
  );
};

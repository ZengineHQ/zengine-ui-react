import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export instead of default to get the Storybooks Docs generated properly.
import { NumberField } from './NumberField';
import { MockForm } from '../../../test/MockForm';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Molecules/NumberField',
  component: NumberField,
  parameters: {
    jest: ['NumberField.test.js'],
  },
};

export const Default = () => <MockForm><NumberField label="Number Input" name="number"/></MockForm>;

export const Required = () => <MockForm><NumberField label="Required Number Input" required={true} name="number" /></MockForm>;

export const Disabled = () => <MockForm><NumberField label="Disabled Number Input" disabled={true} name="number" /></MockForm>;

export const HelpText = () => <MockForm><NumberField label="Number" help="This is some help text" name="number" /></MockForm>;

export const Placeholder = () => <MockForm><NumberField label="Placeholder Number Input" placeholder="placeholder number" name="number" /></MockForm>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MockForm>
      <NumberField
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

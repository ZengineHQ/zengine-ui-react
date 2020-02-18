import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export instead of default to get the Storybooks Docs generated properly.
import { CheckboxField } from './CheckboxField';
import { MockForm } from '../../../test/MockForm';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Molecules/CheckboxField',
  component: CheckboxField,
  parameters: {
    jest: ['CheckboxField.test.js'],
  },
};

export const Default = () => <MockForm><CheckboxField label="Checkbox Input" name="text" /></MockForm>;

export const Required = () => <MockForm><CheckboxField label="Required Checkbox Input" required={true} name="text" /></MockForm>;

export const HelpText = () => <MockForm><CheckboxField label="Yes or No?" help="This is some help text" name="text" /></MockForm>;

export const Disabled = () => <MockForm><CheckboxField label="Disabled Checkbox Input" disabled={true} name="text" /></MockForm>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MockForm>
      <CheckboxField
        name="checkbox"
        label={ text('Label', 'Do you agree?') }
        help={ text('Help Text', 'Please read and accept all terms and conditions before proceeding.') }
        disabled={ boolean('Disabled', false) }
        required={ boolean('Required', true) }

      />
    </MockForm>
  );
};

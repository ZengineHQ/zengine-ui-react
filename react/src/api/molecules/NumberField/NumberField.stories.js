import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export in order to get Storybook Docs working but actually use the default export when writing the stories.
import { NumberField as DocComponent, default as NumberField } from './NumberField';
import { MockForm } from '../../../test/MockForm';
import useDefaultPanel from '../../../storybook/useDefaultPanel';
import { default as TextAreaField } from '../TextAreaField/TextAreaField';

export default {
  title: 'Molecules/NumberField',
  component: DocComponent,
  parameters: {
    jest: ['NumberField.test.js'],
  },
};

export const Default = () => <MockForm><NumberField label="Number Input" name="number"/></MockForm>;

export const Required = () => (
  <MockForm><NumberField label="Required Number Input" required={ true } name="number"/></MockForm>
);

export const Disabled = () => (
  <MockForm><NumberField label="Disabled Number Input" disabled={ true } name="number"/></MockForm>
);

export const HelpText = () => (
  <MockForm><NumberField label="Number" help="This is some help text" name="number"/></MockForm>
);

export const Placeholder = () => (
  <MockForm><NumberField label="Placeholder Number Input" placeholder="placeholder number" name="number"/></MockForm>
);

export const CustomValidation = () => {
  const validate = value => {
    if (!value) {
      return 'Pick a number kid';
    }
    if (value <= 50) {
      return 'Must be greater than 50';
    }
    if (value >= 55) {
      return 'Must be less than 55';
    }
  };
  return (
    <MockForm>
      <NumberField label="Bio" help="Pick a number between 50 and 55" name="random" validate={ validate }/>
    </MockForm>
  );
};

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
        placeholder={ text('Placeholder', 'placeholder') }
      />
    </MockForm>
  );
};

import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export in order to get Storybook Docs working but actually use the default export when writing the stories.
import { RadioGroupField as DocComponent, default as RadioGroupField } from './RadioGroupField';
import { MockForm } from '../../../test/MockForm';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Molecules/RadioGroupField',
  component: DocComponent,
  parameters: {
    jest: ['RadioGroupField.test.js'],
  },
};

const demoOptions = ['Baseball', 'Basketball', 'Hockey', 'Football', 'Soccer'];

export const Default = () => (
  <MockForm>
    <RadioGroupField label="Radio Group Input" name="text" options={ demoOptions }/>
  </MockForm>
);

export const Required = () => (
  <MockForm>
    <RadioGroupField label="Required Radio Group Input" required={ true } name="required" options={ demoOptions }/>
  </MockForm>
);

export const HelpText = () => (
  <MockForm>
    <RadioGroupField label="Yes or No?" help="This is some help text" name="help" options={ demoOptions }/>
  </MockForm>
);

export const Disabled = () => (
  <MockForm>
    <RadioGroupField label="Disabled Radio Group Input" disabled={ true } name="disabled" options={ demoOptions }/>
  </MockForm>
);

export const Playground = () => {
  useDefaultPanel('Knobs');
  const freshDemoOptions = [
    'Kwame (Earth)',
    'Wheeler (Fire)',
    'Linka (Wind)',
    'Gi (Water)',
    'Ma-Ti (Heart)',
  ];

  return (
    <MockForm>
      <RadioGroupField
        name="planeteer"
        label={ text('Label', 'Favorite planeteer from Captain Planet and the aforementioned') }
        help={ text('Help Text', 'There\'s really no right answer...') }
        disabled={ boolean('Disabled', false) }
        required={ boolean('Required', true) }
        options={ freshDemoOptions }
      />
    </MockForm>
  );
};

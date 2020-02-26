import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export in order to get Storybook Docs working but actually use the default export when writing the stories.
import CheckboxGroupField from './CheckboxGroupField';
import { MockForm } from '../../../test/MockForm';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Molecules/CheckboxGroupField',
  component: CheckboxGroupField,
  parameters: {
    jest: ['CheckboxGroupField.test.js'],
  },
};

const demoOptions = ['Cake', 'Pizza', 'Ice Cream', 'Candy', 'Mucus'];

export const Default = () => (
  <MockForm>
    <CheckboxGroupField label="Checkbox Group" name="foo" options={ demoOptions }/>
  </MockForm>
);

export const Required = () => (
  <MockForm>
    <CheckboxGroupField label="Required Checkbox Group" required={ true } name="required" options={ demoOptions }/>
  </MockForm>
);

export const HelpText = () => (
  <MockForm>
    <CheckboxGroupField label="Pick One!" help="This is some help text" name="help" options={ demoOptions }/>
  </MockForm>
);

export const Disabled = () => (
  <MockForm>
    <CheckboxGroupField label="Disabled Checkbox Group" disabled={ true } name="disabled" options={ demoOptions }/>
  </MockForm>
);

export const Playground = () => {
  useDefaultPanel('Knobs');
  const freshDemoOptions = [
    'Triceratops',
    'Tyrannosaurus Rex',
    'Ankylosaurus',
    'Velociraptor',
    'Parasaurolophus',
  ];

  return (
    <MockForm>
      <CheckboxGroupField
        name="dinos"
        label={ text('Label', 'Dinosaurs you would like to be') }
        help={ text('Help Text', 'Theres really no right answer...') }
        disabled={ boolean('Disabled', false) }
        required={ boolean('Required', true) }
        options={ freshDemoOptions }
      />
    </MockForm>
  );
};

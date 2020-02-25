import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export in order to get Storybook Docs working but actually use the default export when writing the stories.
import { SelectField as DocComponent, default as SelectField } from './SelectField';
import { MockForm } from '../../../test/MockForm';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Molecules/SelectField',
  component: DocComponent,
  parameters: {
    jest: ['SelectField.test.js'],
  },
};

/**
 * Dummy options to be re-used across stories.
 */
const opts = ['one', 'two', 'three', 'four'];

export const Default = () => (
  <MockForm><SelectField label="SelectField Input" name="select" options={ opts }/></MockForm>
);

export const Required = () => (
  <MockForm><SelectField label="Required SelectField Input" name="select" options={ opts } required/></MockForm>
);

export const Disabled = () => (
  <MockForm><SelectField label="Disabled SelectField Input" name="select" options={ opts } disabled/></MockForm>
);

export const CustomPlaceholder = () => (
  <MockForm>
    <SelectField
      label="Custom placeholder SelectField Input"
      name="select"
      options={ opts }
      placeholder="Holding the place"
    />
  </MockForm>
);

export const NoPlaceholder = () => (
  <MockForm>
    <SelectField
      label="No placeholder SelectField Input"
      name="select"
      options={ opts }
      placeholder=""
    />
  </MockForm>
);

export const DefaultValue = () => (
  <MockForm>
    <SelectField label="Default Value SelectField Input" name="select" options={ opts } defaultValue="three"/>
  </MockForm>
);

export const Multiple = () => (
  <MockForm><SelectField label="SelectField Input" name="select" options={ opts } multiple={ true }/></MockForm>
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MockForm>
      <SelectField
        label={ text('Label', 'Input Label') }
        disabled={ boolean('Disabled', false) }
        required={ boolean('Required', false) }
        multiple={ boolean('Multiple', false) }
        placeholder={ text('Placeholder', 'placeholder') }
        name="select"
        options={ opts }
      />
    </MockForm>
  );
};

import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

// Use named export instead of default to get the Storybooks Docs generated properly.
import { Select } from './Select';
import { MockForm } from '../../../test/MockForm';
import useDefaultPanel from '../../util/useDefaultPanel';
import { NumberInput } from '../NumberInput/NumberInput';

export default {
  title: 'Molecules/Inputs/Select',
  component: Select,
  parameters: {
    jest: ['Select.test.js'],
  },
};

/**
 * Dummy options to be re-used across stories.
 */
const opts = ['one', 'two', 'three', 'four'];

export const Default = () => <MockForm><Select label="Select Input" name="select" options={opts}/></MockForm>;

export const Required = () => (
  <MockForm><Select label="Select Input" name="select" options={opts} required/></MockForm>
);

export const Disabled = () => (
  <MockForm><Select label="Select Input" name="select" options={opts} disabled/></MockForm>
);

export const Placeholder = () => (
  <MockForm><Select label="Select Input" name="select" options={opts} placeholder="Holding the place"/></MockForm>
);

export const Multiple = () => (
  <MockForm><Select label="Select Input" name="select" options={opts} multiple={true}/></MockForm>
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MockForm>
      <Select
        label={ text('Label', 'Input Label') }
        disabled={ boolean('Disabled', false) }
        required={ boolean('Required', false) }
        multiple={ boolean('Multiple', false) }
        placeholder={ text('Placeholder', 'placeholder')}
        name="select"
        options={opts}
      />
    </MockForm>
  );
};

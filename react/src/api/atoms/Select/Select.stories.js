import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import Select from './Select';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    jest: ['Select.test.js'],
  },
};

const exampleOpts = ['Option One', 'Option Two', 'Option Three'];

export const Default = () => <Select options={ exampleOpts }/>;

export const Required = () => <Select required={ true } options={ exampleOpts }/>;

export const Disabled = () => <Select disabled={ true } options={ exampleOpts }/>;

export const Placeholder = () => <Select options={ exampleOpts } placeholder="PICK ONE NOW!"/>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Select
      required={ boolean('Required', false) }
      disabled={ boolean('Disabled', false) }
      classes={ text('Classes', 'foo bar') }
    />
  );
};

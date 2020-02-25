import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Select as DocComponent, default as Select } from './Select';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Atoms/Select',
  component: DocComponent,
  parameters: {
    jest: ['Select.test.js'],
  },
};

const exampleOpts = ['Option One', 'Option Two', 'Option Three'];

export const Default = () => <Select options={ exampleOpts }/>;

export const Required = () => (
  <Select
    required={ true }
    options={ exampleOpts }
    onChange={ action('Selected item!') }
    onBlur={ action('onBlur') }
  />
);

export const Disabled = () => (
  <Select
    disabled={ true }
    options={ exampleOpts }
    onChange={ action('Selected item!') }
    onBlur={ action('onBlur') }
  />
);

export const Placeholder = () => (
  <Select
    options={ exampleOpts }
    placeholder="PICK ONE NOW!"
    onChange={ action('Selected item!') }
    onBlur={ action('onBlur') }
  />
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Select
      required={ boolean('Required', false) }
      disabled={ boolean('Disabled', false) }
      classes={ text('Classes', 'foo bar') }
      onChange={ action('onChange called') }
      onBlur={ action('onBlur called') }
    />
  );
};

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
  />
);

export const Disabled = () => (
  <Select
    disabled={ true }
    options={ exampleOpts }
    onChange={ action('Selected item!') }
  />
);

export const CustomPlaceholder = () => (
  <Select
    options={ exampleOpts }
    placeholder="PICK ONE NOW!"
    onChange={ action('Selected item!') }
  />
);

export const NoPlaceholder = () => (
  <Select
    options={ exampleOpts }
    placeholder=""
    onChange={ action('Selected item!') }
  />
);

export const DefaultValue = () => (
  <Select
    options={ exampleOpts }
    defaultValue="Option Two"
    placeholder="-Default Selected-"
  />
);

export const Multiple = () => (
  <Select
    options={ exampleOpts }
    placeholder=""
    multiple={ true }
  />
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Select
      options={ exampleOpts }
      required={ boolean('Required', false) }
      disabled={ boolean('Disabled', false) }
      multiple={ boolean('Multiple', false) }
      placeholder={ text('Placeholder', '-Select-') }
      classes={ text('Classes', 'foo bar') }
      onChange={ action('onChange called') }
    />
  );
};

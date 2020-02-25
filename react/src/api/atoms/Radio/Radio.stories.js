import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { Radio as DocComponent, default as Radio } from './Radio';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Atoms/Radio',
  component: DocComponent,
  parameters: {
    jest: ['Radio.test.js'],
  },
};

export const Default = () => <Radio/>;

export const Required = () => <Radio required={ true }/>;

export const Disabled = () => <Radio disabled={ true }/>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Radio
      required={ boolean('Required', false) }
      disabled={ boolean('Disabled', false) }
      classes={ text('Classes', 'foo bar') }
    />
  );
};

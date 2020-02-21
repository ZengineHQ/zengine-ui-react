import React from 'react';
import { number, text } from '@storybook/addon-knobs';

import CounterLabeled from './CounterLabeled';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Molecules/CounterLabeled',
  component: CounterLabeled,
  parameters: {
    jest: ['CounterLabeled.test.js'],
  },
};

export const Default = () => <CounterLabeled/>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <CounterLabeled
      count={ number('Count', 182) }
      label={ text('Label', 'Reviewed') }
      classes={ text('Classes', 'class-one') }
    />
  );
};

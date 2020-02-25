import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { Checkbox as DocComponent, default as Checkbox } from './Checkbox';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Atoms/Checkbox',
  component: DocComponent,
  parameters: {
    jest: ['Checkbox.test.js'],
  },
};

export const Default = () => <Checkbox/>;

export const Required = () => <Checkbox required={ true }/>;

export const Disabled = () => <Checkbox disabled={ true }/>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Checkbox
      required={ boolean('Required', false) }
      disabled={ boolean('Disabled', false) }
      classes={ text('Classes', 'foo bar') }
    />
  );
};

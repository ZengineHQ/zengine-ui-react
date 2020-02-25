import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { Textarea as DocComponent, default as Textarea } from './Textarea';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Atoms/Textarea',
  component: DocComponent,
  parameters: {
    jest: ['Textarea.test.js'],
  },
};

export const Default = () => <Textarea />;

export const Required = () => <Textarea required={ true } />;

export const Disabled = () => <Textarea disabled={ true } />;

export const Placeholder = () => <Textarea placeholder="placeholder text" />;

export const DisableResize = () => <Textarea resizable={ false } />;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <Textarea
      classes={ text('Classes', 'class-one') }
      disabled={ boolean('Disabled', false) }
      required={ boolean('Required', false) }
      resizable={ boolean('Resizable', true) }
    />
  );
};

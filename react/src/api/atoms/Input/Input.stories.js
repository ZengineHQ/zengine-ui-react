import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Input from './Input';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    jest: ['Input.test.js'],
  },
};

export const Default = () => <Input />;

export const Required = () => <Input required={ true } />;

export const Disabled = () => <Input disabled={ true } />;

export const Placeholder = () => <Input placeholder="placeholder text" />;

export const TypeNumber = () => <Input type="number" />;

export const Playground = () => {
  useDefaultPanel('Knobs');

  const typeOpts = [
    'text',
    'number',
    'checkbox',
    'radio',
    // 'email',
    // 'tel',
  ];

  return (
    <Input
      required={ boolean('Required', false) }
      disabled={ boolean('Disabled', false) }
      placeholder={ text('Placeholder', 'placeholder')}
      type={ select('Type', typeOpts, 'text') }
      classes={text('Classes', 'foo bar')}
    />
  );
};

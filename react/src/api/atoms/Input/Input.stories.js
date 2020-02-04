import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    notes: 'This is a standard HTML input',
  },
};

export const Default = () => <Input></Input>;

export const Required = () => <Input required={ true }></Input>;

export const Disabled = () => <Input disabled={ true }></Input>;

export const Placeholder = () => <Input placeholder="placeholder text"></Input>;

export const Number = () => <Input type="number"></Input>;

export const Playground = () => {
  const typeOpts = [
    'text',
    'number',
  ];

  return (
    <Input
      required={ boolean('Required', false) }
      disabled={ boolean('Disabled', false) }
      placeholder={ text('Placeholder', 'placeholder')}
      type={ select('Type', typeOpts, 'text') }
    ></Input>
  );
};
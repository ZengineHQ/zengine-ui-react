import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { withTests } from '@storybook/addon-jest';

import results from '../../../.test-results.json';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  decorators: [withTests({ results })],
  parameters: {
    notes: 'This is a standard HTML input',
    jest: ['Input.test.js'],
  },
};

export const Default = () => <Input />;

export const Required = () => <Input required={ true } />;

export const Disabled = () => <Input disabled={ true } />;

export const Placeholder = () => <Input placeholder="placeholder text" />;

export const TypeNumber = () => <Input type="number" />;

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
      classes={text('Classes', 'foo bar')}
    />
  );
};

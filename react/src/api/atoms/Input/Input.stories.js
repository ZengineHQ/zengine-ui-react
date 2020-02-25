import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

// Use named export in order to get Storybook Docs working but actually use the default export when writing the stories.
import { Input as DocComponent, default as Input } from './Input';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Atoms/Input',
  component: DocComponent,
  parameters: {
    jest: ['Input.test.js'],
  },
};

export const Default = () => <Input/>;

export const Required = () => <Input required={ true }/>;

export const Disabled = () => <Input disabled={ true } required={ false }/>;

export const Readonly = () => <Input readonly={ true }/>;

export const Placeholder = () => <Input placeholder="placeholder text"/>;

export const TypeNumber = () => <Input type="number"/>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  const typeOpts = [
    'text',
    'number',
    'checkbox',
    'radio',
    'date',
    // 'email',
    // 'tel',
  ];

  return (
    <Input
      required={ boolean('Required', false) }
      disabled={ boolean('Disabled', false) }
      placeholder={ text('Placeholder', 'placeholder') }
      type={ select('Type', typeOpts, 'text') }
      classes={ text('Classes', 'foo bar') }
    />
  );
};

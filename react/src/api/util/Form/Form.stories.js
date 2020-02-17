import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import YidhraForm from './Form';
import { NumberInput, TextInput } from '../../index';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Utility/YidhraForm',
  component: YidhraForm,
  parameters: {
    jest: ['Form.test.js'],
  },
};

export const Default = () => (
  <YidhraForm onSubmit={ action('Form submitted') }>
    <TextInput label="Name" name="name" required/>
    <NumberInput label="Age" name="age" required/>
  </YidhraForm>
);

export const HideReset = () => (
  <YidhraForm onSubmit={ action('Form submitted') } showReset={ false }>
    <TextInput label="Name" name="name" required/>
    <NumberInput label="Age" name="age" required/>
  </YidhraForm>
);

export const ResetLabel = () => (
  <YidhraForm onSubmit={ action('Form submitted') } labelReset="Nuke it!">
    <TextInput label="Name" name="name" required/>
    <NumberInput label="Age" name="age" required/>
  </YidhraForm>
);

export const HideSubmit = () => (
  <YidhraForm onSubmit={ action('Form submitted') } showSubmit={ false }>
    <TextInput label="Name" name="name" required/>
    <NumberInput label="Age" name="age" required/>
  </YidhraForm>
);

export const SubmitLabel = () => (
  <YidhraForm onSubmit={ action('Form submitted') } labelSubmit="Perform exciting action!">
    <TextInput label="Name" name="name" required/>
    <NumberInput label="Age" name="age" required/>
  </YidhraForm>
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <YidhraForm
      showReset={ boolean('Show Reset', true) }
      showSubmit={ boolean('Show Submit', true) }
      onSubmit={ action('Form submitted') }
      labelReset={ text('Reset Label', 'Reset')}
      labelSubmit={ text('Submit Label', 'Save')}
    >
      <TextInput label="Name" name="name" required/>
      <NumberInput label="Age" name="age" required/>
    </YidhraForm>
  );
};

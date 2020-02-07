import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import YidhraForm from './Form';
import { NumberInput, TextInput } from '../../index';

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
  </YidhraForm>
);

export const SubmitLabel = () => (
  <YidhraForm onSubmit={ action('Form submitted') } labelSubmit="Do Stuff!">
    <TextInput label="Name" name="name" required/>
    <NumberInput label="Age" name="age" required/>
  </YidhraForm>
);

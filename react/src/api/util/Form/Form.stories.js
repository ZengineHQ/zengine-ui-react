import React from 'react';
import { decorate } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import YidhraForm from './Form';
import { Form, NumberInput, TextInput } from '../../index';

export default {
  title: 'Utility/YidhraForm',
  component: YidhraForm,
  parameters: {
    notes: 'Use this to generate a full-fledged form.',
  },
};

const firstArg = decorate([args => args.slice(0, 1)]);

export const Default = () => (
  <YidhraForm onSubmit={firstArg.action('Form submitted')}>
    <TextInput label="Name" name="name" required />
    <NumberInput label="Age" name="age" required />
  </YidhraForm>
);

export const HideReset = () => (
  <YidhraForm onSubmit={firstArg.action('Form submitted')} showReset={false}>
    <TextInput label="Name" name="name" required />
  </YidhraForm>
);

export const SubmitLabel = () => (
  <YidhraForm onSubmit={firstArg.action('Form submitted')} labelSubmit="Do Stuff!">
    <TextInput label="Name" name="name" required />
    <NumberInput label="Age" name="age" required />
  </YidhraForm>
);

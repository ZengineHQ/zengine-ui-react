import React from 'react';
import { action } from '@storybook/addon-actions';

import ContactForm from './ContactForm';

export default {
  title: 'Organisms/ContactForm',
  component: ContactForm,
  parameters: {
    jest: ['ContactForm.test.js'],
  },
};

export const Default = () => <ContactForm onSubmit={ action('Contact form submitted') }/>;

export const WithButton = () => (
  <ContactForm
    onSubmit={ action('Contact form submitted') }
    labelInput="Button Contact"
    showSubmit={ true }
  />
);

export const ButtonLabel = () => (
  <ContactForm
    onSubmit={ action('Contact form submitted') }
    labelInput="Custom Button Label Contact"
    showSubmit={ true }
    labelSubmit="Go!"
  />
);

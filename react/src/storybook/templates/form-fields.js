import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  CheckboxField,
  Form,
  NumberField,
  PageTitle,
  RadioGroupField,
  SelectField,
  TextAreaField,
  TextField
} from '../../api';

export default {
  title: 'Templates',
  parameters: {
    options: {
      showPanel: false
    }
  }
};

export const AllFormFields = () => {
  const selectOpts = ['Heart', 'Kidneys', 'Liver', 'Spleen'];
  const radioOpts = ['Baseball', 'Basketball', 'Football', 'Hockey', 'Soccer'];

  return (
    <>
      <PageTitle>The following form contains all of the available field molecules</PageTitle>

      <p>They are displayed in alphabetical order with no additional formatting.</p>

      <hr/>

      <Form onSubmit={ action('Form submitted!') }>
        <CheckboxField label="I agree to receive spam emails from you" name="marketing" required/>
        <NumberField label="How many wishes would you like" name="wishes" required/>
        <RadioGroupField label="Favorite sport" options={ radioOpts } name="sport" required/>
        <SelectField label="Favorite organ" options={ selectOpts } name="organ" required/>
        <TextAreaField label="Message" name="message" placeholder="Type in something thoughtful" required/>
        <TextField label="Name" name="name" placeholder="Name" required/>
      </Form>
    </>
  );
}

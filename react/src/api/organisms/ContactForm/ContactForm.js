import React from 'react';
import PropTypes from 'prop-types';

import { CheckboxField, Form, TextAreaField, TextField } from '../../index';

/**
 * The ContactForm organism displays a simple contact form.
 *
 * It consists of a `YidhraForm` utility wrapping some `*Field` molecules.
 *
 * This exists mostly as a contrived example but it might come in handy one day...
 */
function ContactForm(props) {
  return (
    <Form
      onSubmit={ props.onSubmit }
      labelSubmit={ props.labelSubmit }
      showReset={ false }
      classes={ props.classes }
      validateOnMount={ false }
    >
      <TextField label="Name" name="name" placeholder="Name" required/>
      <TextField label="Email" name="email" placeholder="Email" required/>
      <TextAreaField label="Message" name="message" placeholder="Type in something thoughtful"/>
      <CheckboxField label="I agree to receive spam emails from you" name="marketing"/>
    </Form>
  );
}

ContactForm.propTypes = {
  /**
   * Submit handler.
   **/
  onSubmit: PropTypes.func.isRequired,
  /**
   * The submit button label.
   **/
  labelSubmit: PropTypes.string,
  /**
   * HTML classes to be added as-is to the form.
   **/
  classes: PropTypes.string,
};

ContactForm.defaultProps = {
  classes: '',
  labelSubmit: 'Submit',
};

export default ContactForm;

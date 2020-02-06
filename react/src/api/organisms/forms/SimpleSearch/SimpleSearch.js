import React from 'react';
import PropTypes from 'prop-types';

import { Form, TextInput } from '../../../index';

function SimpleSearch(props) {
  return (
    <Form onSubmit={props.onSubmit} labelSubmit={props.labelSubmit} showReset={false} classes={props.classes}>
      <TextInput label={props.labelInput} name="search" placeholder={props.placeholder} />
    </Form>
  );
}

SimpleSearch.propTypes = {
  /**
   * Submit handler.
   **/
  onSubmit: PropTypes.func.isRequired,
  /**
   * The search input label.
   **/
  labelInput: PropTypes.string,
  /**
   * The submit button label.
   **/
  labelSubmit: PropTypes.string,
  /**
   * The search input placeholder.
   **/
  placeholder: PropTypes.string,
  /**
   * HTML classes to be added as-is to the form.
   **/
  classes: PropTypes.string,
};

SimpleSearch.defaultProps = {
  classes: '',
  labelInput: 'Search',
  labelSubmit: 'Search',
  placeholder: 'Type here...'
};

export default SimpleSearch;

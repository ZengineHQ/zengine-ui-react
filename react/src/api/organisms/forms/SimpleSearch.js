import React from 'react';
import PropTypes from 'prop-types';

import { Form, TextInput } from '../../index';

function SimpleSearch(props) {
  return (
    <Form onSubmit={props.onSubmit} labelSubmit="Search" showReset={false}>
      <TextInput label={props.label} name="search" placeholder={props.placeholder} />
    </Form>
  );
}

SimpleSearch.propTypes = {
  /**
   * Submit handler.
   **/
  onSubmit: PropTypes.func.isRequired,
  /**
   * The search button label.
   **/
  label: PropTypes.string,
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
  label: 'Search',
  placeholder: 'Type here...'
};

export default SimpleSearch;

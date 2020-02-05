import React from 'react';
import PropTypes from 'prop-types';

import { Form, TextInput } from '../../index';

function SimpleSearch(props) {
  return (
    <Form onSubmit={props.onSubmit} labelSubmit="Search" showReset={false}>
      <TextInput label="Search" name="search" placeholder="Type here..." required />
    </Form>
  );
}

SimpleSearch.propTypes = {
  /**
   * Submit handler.
   **/
  onSubmit: PropTypes.func.isRequired,
  /**
   * HTML classes to be added as-is to the form.
   **/
  classes: PropTypes.string,
};

SimpleSearch.defaultProps = {
  classes: '',
};

export default SimpleSearch;

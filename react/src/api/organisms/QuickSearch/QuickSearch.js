import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

import { Form, TextInput } from '../../index';

/**
 * The QuickSearch organism displays a simple search form.
 *
 * It consists of a `YidhraForm` utility wrapping a `TextInput` molecule.
 *
 * This exists mostly as a contrived example but it might come in handy one day...
 */
function QuickSearch(props) {
  return (
    <Form
      onSubmit={ props.onSubmit }
      labelSubmit={ props.labelSubmit }
      showReset={ false }
      showSubmit={ props.showSubmit }
      classes={ cc(['form-inline', props.classes]) }
    >
      <TextInput label={ props.labelInput } name="search" placeholder={ props.placeholder }/>
    </Form>
  );
}

QuickSearch.propTypes = {
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
  /**
   * Hides the submit button.
   **/
  showSubmit: PropTypes.bool,
};

QuickSearch.defaultProps = {
  classes: '',
  labelInput: 'Search',
  labelSubmit: 'Search',
  placeholder: 'Type here...',
  showSubmit: false
};

export default QuickSearch;

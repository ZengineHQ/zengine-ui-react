import React from 'react';
import PropTypes from 'prop-types';

function Label(props) {
  return (
    <label htmlFor={ props.for } className={ props.classes }>
      { props.required && '*' }
      { props.children }
    </label>
  );
}

Label.propTypes = {
  /**
   * Only text may be passed as a child to be used as the label contents.
   **/
  children: PropTypes.string,
  /**
   * HTML classes to be added as-is to the label.
   **/
  classes: PropTypes.string,
  /**
   * HTML "for" attribute.
   **/
  for: PropTypes.string,
  /**
   * Marks the label as being for a required input.
   **/
  required: PropTypes.bool
};

Label.defaultProps = {
  required: false,
};

export default Label;

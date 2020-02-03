import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const Label = props => (
  <label htmlFor={ props.for } className={ props.classes }>
    { props.required && '*' }
    { props.children }
  </label>
);

Label.propTypes = exact({
  children: PropTypes.string,
  classes: PropTypes.string,
  for: PropTypes.string,
  required: PropTypes.bool
});

Label.defaultProps = {
  required: false,
};

export default Label;

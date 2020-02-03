import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const Input = function (props) {
  return (
    <input
      type={ props.type }
      required={ props.required }
      aria-required={ props.required }
    />
  );
};

Input.propTypes = exact({
  required: PropTypes.bool,
  type: PropTypes.string,
});

Input.defaultProps = {
  // Leaving this to explicitly false results in attribute pollution for aria-required when not required.
  // required: false,
  type: 'text',
};

export default Input;

import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const Input = function (props) {
  return (
    <input
      type={ props.type }
      required={ props.required }
      aria-required={ props.required && props.required }
      placeholder={ props.placeholder }
      disabled={ props.disabled }
      aria-disabled={ props.disabled && props.disabled }
      id={ props.id }
    />
  );
};

Input.propTypes = exact({
  disabled: PropTypes.bool,
  id: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
});

Input.defaultProps = {
  disabled: false,
  required: false,
  type: 'text',
};

export default Input;

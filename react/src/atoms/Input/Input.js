import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const Input = function (props) {
  return (
    <input type={ props.type }/>
  );
};

Input.propTypes = exact({
  type: PropTypes.string,
});

Input.defaultProps = {
  type: 'text',
};

export default Input;

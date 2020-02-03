import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import Input from '../../../atoms/Input/Input';
import Label from "../../../atoms/Label/Label";

const TextInput = function (props) {
  return (
    <div className="form-input">
      { props.label && (<Label required={ props.required }>{ props.label }</Label>) }
      <Input type="text" required={ props.required }/>
    </div>
  );
};

TextInput.propTypes = exact({
  label: PropTypes.string,
  required: PropTypes.bool,
});

TextInput.defaultProps = {
  label: '',
  required: false,
};

export default TextInput;

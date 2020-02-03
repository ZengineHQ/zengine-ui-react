import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import Input from '../../../atoms/Input/Input';
import Label from "../../../atoms/Label/Label";

const TextInput = function (props) {
  const id = props.id || 'text-input';

  return (
    <div className="form-input">
      { props.label && (
        <Label required={ props.required } for={ id }>{ props.label }</Label>
      ) }
      <Input
        type="text"
        disabled={ props.disabled }
        required={ props.required }
        placeholder={ props.placeholder }
        id={ id }
      />
    </div>
  );
};

TextInput.propTypes = exact({
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
});

TextInput.defaultProps = {
  disabled: false,
  label: '',
  required: false,
};

export default TextInput;

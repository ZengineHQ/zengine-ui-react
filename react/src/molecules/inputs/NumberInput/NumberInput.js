import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../atoms/Input/Input';
import Label from "../../../atoms/Label/Label";

const NumberInput = function (props) {
  const id = props.id || 'number-input';

  return (
    <div className="form-input">
      { props.label && (
        <Label required={ props.required } for={ id }>{ props.label }</Label>
      ) }
      <Input
        type="number"
        disabled={ props.disabled }
        required={ props.required }
        placeholder={ props.placeholder }
        id={ id }
      />
    </div>
  );
};

NumberInput.propTypes = {
  /**
   * Disables the input.
   **/
  disabled: PropTypes.bool,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Input label.
   **/
  label: PropTypes.string,
  /**
   * HTML placeholder.
   **/
  placeholder: PropTypes.string,
  /**
   * Marks the input as required.
   **/
  required: PropTypes.bool,
};

NumberInput.defaultProps = {
  disabled: false,
  label: '',
  required: false,
};

export default NumberInput;

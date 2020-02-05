import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../atoms/Input/Input';
import Label from "../../../atoms/Label/Label";

function NumberInput (props) {
  const id = props.id || 'number-input';

  return (
    <div className="form-input">
      { props.label && (
        <Label required={ props.required } for={ id } classes={ props.labelClasses }>{ props.label }</Label>
      ) }
      <Input
        type="number"
        disabled={ props.disabled }
        required={ props.required }
        placeholder={ props.placeholder }
        id={ id }
        classes={ props.classes }
      />
    </div>
  );
}

NumberInput.propTypes = {
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Input label.
   **/
  label: PropTypes.string,
  /**
   * Marks the input as required.
   **/
  required: PropTypes.bool,
  /**
   * Marks the input as disabled.
   **/
  disabled: PropTypes.bool,
  /**
   * HTML placeholder.
   **/
  placeholder: PropTypes.string,
  /**
   * HTML classes to be added as-is to the input.
   **/
  classes: PropTypes.string,
  /**
   * HTML classes to be added as-is to the label.
   **/
  labelClasses: PropTypes.string,
};

NumberInput.defaultProps = {
  disabled: false,
  label: '',
  required: false,
};

export default NumberInput;

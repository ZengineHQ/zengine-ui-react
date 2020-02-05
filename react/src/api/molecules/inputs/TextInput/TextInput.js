import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../atoms/Input/Input';
import Label from "../../../atoms/Label/Label";

function TextInput(props) {
  const id = props.id || 'text-input';

  return (
    <div className="form-input">
      { props.label && (
        <Label required={ props.required } for={ id } classes={ props.labelClasses }>{ props.label }</Label>
      ) }
      <Input
        type="text"
        disabled={ props.disabled }
        required={ props.required }
        placeholder={ props.placeholder }
        id={ id }
        classes={ props.classes }
      />
    </div>
  );
}

TextInput.propTypes = {
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

TextInput.defaultProps = {
  disabled: false,
  label: '',
  required: false,
};

export default TextInput;

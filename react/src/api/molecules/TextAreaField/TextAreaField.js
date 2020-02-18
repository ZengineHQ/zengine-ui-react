import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import { isEmpty } from '../../util/validation';
import Label from '../../atoms/Label/Label';
import getFieldClasses from '../../util/getFieldClasses';
import ErrorMessage from '../../util/ErrorMessage/ErrorMessage';
import { Textarea } from '../../index';
import withForwardRef from '../../util/withForwardRef';

/**
 * The TextAreaField molecule is a full-fledged textarea input Formik field with validation, help text and error messages.
 *
 * It consists of a `Textarea` atom, a `Label` atom and some additional markup.
 *
 * Use it to collect long-form textual data from users.
 */
function TextAreaField(props) {
  const validate = value => {
    if (props.required && isEmpty(value)) {
      return 'Required';
    }
  };

  const [field, meta] = useField({ name: props.name, validate });

  const id = props.id || `textarea-${ props.name }`;
  const helpId = props.help ? `${ id }-help` : null;

  return (
    <div className="form-group">
      { props.label && (
        <Label required={ props.required } for={ id } classes={ props.labelClasses }>{ props.label }</Label>
      ) }
      <Textarea
        id={ id }
        disabled={ props.disabled }
        required={ props.required }
        placeholder={ props.placeholder }
        classes={ getFieldClasses(meta, props.classes) }
        ref={ props.innerRef }
        describedby={ helpId }
        resizable={ props.resizable }
        { ...field }
      />

      { props.help && <small id={ helpId } className="form-text text-muted">{ props.help }</small> }

      <ErrorMessage meta={ meta }/>
    </div>
  );
}

TextAreaField.propTypes = {
  /**
   * HTML element name.
   **/
  name: PropTypes.string.isRequired,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Field label.
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
  /**
   * Optional help text to display below the input.
   **/
  help: PropTypes.string,
  /**
   * Whether the textarea should be resizable; uses native HTML functionality.
   **/
  resizable: PropTypes.bool,
  /**
   * Optionally pass a ref to be attached to the actual HTML input element.
   **/
  innerRef: PropTypes.object,
};

TextAreaField.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  required: false,
  classes: '',
  resizable: true,
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { TextAreaField };

export default withForwardRef(TextAreaField);

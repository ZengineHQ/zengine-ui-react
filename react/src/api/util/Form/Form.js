import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import _isEmpty from 'lodash/isEmpty';

import Button from '../../atoms/Button/Button';

/**
 * YidhraForm is an advanced
 */
function YidhraForm(props) {
  const {
    initialValues,
    onSubmit,
    labelReset,
    labelSubmit,
    showReset,
    showSubmit,
    validate,
    classes
  } = props;

  const validateForm = values => {
    let errors = {};

    if (validate && typeof validate === 'function') {
      errors = { ...errors, ...validate(values) };
    }

    return errors;
  };

  return (
    <Formik
      initialValues={ initialValues || {} }
      validateOnMount={ true }
      validateOnBlur={ true }
      validateOnChange={ true }
      onSubmit={ (values, actions) => {
        actions.setSubmitting(false);
        onSubmit(values);
        actions.resetForm();
      } }
      validate={ validateForm }
    >
      { ({ dirty, isValid, isSubmitting, errors, touched }) => {
        return (
          <Form noValidate className={ classes }>
            { props.children }

            {/* If the form has been touched and we have errors, display a message above buttons. */}
            { !_isEmpty(errors) && !_isEmpty(touched) && (<div className="form-errors">
              Please fix errors and try again.
            </div>) }

            {/* If we're showing either a submit or a reset button add a "form-actions" wrapper for them */}
            { (showSubmit || showReset) && (<div className="form-actions">
                { showSubmit && (<Button
                    type="submit"
                    theme="primary"
                    aria-label={ labelSubmit }
                    disabled={ isSubmitting || !isValid }
                  >
                    { labelSubmit }
                  </Button>
                ) }

                { showReset && dirty && (
                  <Button type="reset" theme="link" aria-label={ labelReset } disabled={ isSubmitting }>
                    { labelReset }
                  </Button>
                ) }
              </div>
            ) }
          </Form>
        )
      } }
    </Formik>
  );
}

YidhraForm.propTypes = {
  /**
   * Pass elements to be rendered into the form.
   **/
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Callback that will receive valid, submitted form values.
   **/
  onSubmit: PropTypes.func.isRequired,
  /**
   * Initial data, if any, to populate the form with.
   **/
  initialValues: PropTypes.object,
  /**
   * Customize the label for the "Reset Form" button.
   **/
  labelReset: PropTypes.string,
  /**
   * Customize the label for the "Save Form" button.
   **/
  labelSubmit: PropTypes.string,
  /**
   * Whether or not to display the reset button.
   **/
  showReset: PropTypes.bool,
  /**
   * Whether or not to display the submit button.
   **/
  showSubmit: PropTypes.bool,
  /**
   * Additional custom form-level validation function.
   **/
  validate: PropTypes.func,
  /**
   * HTML classes to be added as-is to the form.
   **/
  classes: PropTypes.string,
};

YidhraForm.defaultProps = {
  initialData: {},
  labelReset: 'Reset',
  labelSubmit: 'Save',
  showReset: true,
  showSubmit: true,
  classes: ''
};

export default YidhraForm;

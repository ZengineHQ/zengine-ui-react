import React from 'react';
import PropTypes from 'prop-types';

import extractOptions from '../../util/extractOptions';
import withAriaAttributes from '../../util/withAriaAttributes';
import withInputProps from '../../util/withInputProps';

/**
 * A select is used to have users select one or more options from a list.
 *
 * This will generate an HTML `<select>` element.
 *
 * See the `SelectField` molecule for an example usage.
 *
 * Unless you are building custom Select molecules or something along those lines you will probably never use this
 * directly.
 */
function Select(props) {
  return (
    <select
      { ...props }
      multiple={ props.multiple }
      defaultValue={ props.defaultValue }
    >
      <option value="">{ props.placeholder }</option>
      { extractOptions(props.options).map((opt, i) => (
        <option key={ i } value={ opt.key }>{ opt.val }</option>
      )) }
    </select>
  );
}

Select.propTypes = {
  /**
   * HTML element name.
   **/
  name: PropTypes.string,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Select options; either an object keyed by values or an array of strings.
   **/
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.string)]),
  /**
   * Marks the select as required.
   **/
  required: PropTypes.bool,
  /**
   * Marks the select as disabled.
   **/
  disabled: PropTypes.bool,
  /**
   * The element id of any associated help text, used for accessibility.
   **/
  describedby: PropTypes.string,
  /**
   * Marks the select as accepting multiple choices.
   **/
  multiple: PropTypes.bool,
  /**
   * Value to be used as the empty option.
   **/
  placeholder: PropTypes.string,
  /**
   * HTML classes to be added as-is to the select.
   **/
  classes: PropTypes.string,
  /**
   * Callback for when the select's value changes.
   **/
  onChange: PropTypes.func,
  /**
   * Callback for when the select loses focus.
   **/
  onBlur: PropTypes.func,
  /**
   * Default value for the select.
   **/
  defaultValue: PropTypes.string,
};

Select.defaultProps = {
  disabled: false,
  required: false,
  classes: '',
  multiple: false,
  placeholder: '-Select-'
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { Select };

export default withAriaAttributes(withInputProps(Select));

import React from 'react';

/**
 * Applies common properties to an input component.
 *
 * It also omits them if blank so we don't clutter out elements with empty attributes unless they mean something.
 */
export default function withInputProps(Component) {
  function component(props) {
    const { readonly, classes, ...passProps } = props;

    if (readonly) {
      // React DOM requires it to be camelCased like this.
      passProps.readOnly = true;
    }

    if (classes) {
      passProps.className = classes;
    }

    if (props.onChange) {
      passProps.onChange = props.onChange;
    }

    if (props.onBlur) {
      passProps.onBlur = props.onBlur;
    }

    // Only set value if controlled.
    if (props.onChange && props.onBlur) {
      passProps.value = props.value || '';
    }

    return <Component { ...passProps }/>;
  }

  const name = Component.displayName || Component.name;
  component.displayName = `withInputProps(${ name })`;

  component.defaultProps = {
    ...Component.defaultProps,
    ...{
      disabled: false,
      required: false,
      readonly: false,
    }
  };

  return component;
};

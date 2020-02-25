import React from 'react';

/**
 * Applies ARIA attributes to a Component.
 *
 * This checks for the presence of certain HTML attributes in the props and adds the corresponding ARIA attribute
 * to the list of attributes to be rendered with the element.
 */
export default function withAriaAttributes(Component) {
  function component(props) {
    const ariaProps = {};

    if (props.describedby) {
      ariaProps['aria-describedby'] = props.describedby;
    }

    // Only add these properties if they are true, to avoid polluting the markup with unnecessary attributes.
    ['readonly', 'disabled', 'required'].forEach(attr => {
      if (attr in props && (props[attr] || props[attr] === undefined)) {
        ariaProps[`aria-${ attr }`] = true;
      }
    });

    return <Component { ...props } { ...ariaProps }/>;
  }

  const name = Component.displayName || Component.name;
  component.displayName = `withAriaAttributes(${ name })`;
  return component;
};

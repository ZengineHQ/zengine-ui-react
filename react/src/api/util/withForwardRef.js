import React, { forwardRef } from 'react';

export default function withForwardRef (Component) {
  function component (props, ref) {
    return <Component innerRef={ ref } { ...props } />;
  }

  const name = Component.displayName || Component.name;
  component.displayName = `withForwardRef(${ name })`;
  return forwardRef(component);
};

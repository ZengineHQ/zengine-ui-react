import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import cc from 'classcat';

const Button = function (props) {
  return (
    <button
      type={ props.type }
      onClick={ props.onClick }
      className={cc({
        primary: props.theme === 'primary',
        subdued: props.theme === 'subdued',
      })}
      disabled={ props.disabled }
      aria-disabled={ props.disabled }
    >
      { props.children }
    </button>
  );
};

Button.propTypes = exact({
  children: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf([
    'default',
    'primary',
    'subdued',
  ]),
  type: PropTypes.oneOf([
    'button',
    'reset',
    'submit'
  ]),
});

Button.defaultProps = {
  // Leaving this to explicitly false results in attribute pollution for aria-disabled when not disabled.
  // disabled: false,
  onClick: () => null,
  theme: '',
  type: 'button',
};

export default Button;

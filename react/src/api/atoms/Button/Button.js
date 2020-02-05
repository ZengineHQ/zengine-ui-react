import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

function Button(props) {
  return (
    <button
      type={ props.type }
      onClick={ props.onClick }
      className={cc([{
        primary: props.theme === 'primary',
        slim: props.theme === 'subdued',
      }, props.classes])}
      disabled={ props.disabled }
      aria-disabled={ props.disabled === true ? true : null }
    >
      { props.children }
    </button>
  );
}

Button.propTypes = {
  /**
   * Only text may be passed as a child to be used as the button label.
   **/
  children: PropTypes.string,
  /**
   * Disables the button.
   **/
  disabled: PropTypes.bool,
  /**
   * Click handler.
   **/
  onClick: PropTypes.func,
  /**
   * Button theme.
   **/
  theme: PropTypes.oneOf([
    '',
    'primary',
    'subdued',
  ]),
  /**
   * HTML classes to be added as-is to the button.
   **/
  classes: PropTypes.string,
  /**
   * HTML button type.
   **/
  type: PropTypes.oneOf([
    'button',
    'reset',
    'submit'
  ]),
};

Button.defaultProps = {
  disabled: false,
  onClick: () => null,
  theme: '',
  type: 'button',
  classes: '',
};

export default Button;

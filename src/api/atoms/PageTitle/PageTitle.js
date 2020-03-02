import React from 'react';
import PropTypes from 'prop-types';

/**
 * A Page Title displays an `h1` HTML element.
 *
 * There should only be one Page Title per page :)
 *
 * It's really up to you whether you want to use this component or just copy the 1 liner that is it's markup.
 */
function PageTitle(props) {
  return (
    <h1 className={ props.classes }>{ props.children }</h1>
  );
}

PageTitle.propTypes = {
  /**
   * Plain text or a component may be passed as a child to be used as the page title.
   **/
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * HTML classes to be added as-is to the HTML element.
   **/
  classes: PropTypes.string,
};

PageTitle.defaultProps = {
  classes: ''
};

export default PageTitle;

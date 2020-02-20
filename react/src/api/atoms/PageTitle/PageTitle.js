import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

/**
 * A Page Title displays an `h1` HTML element.
 *
 * It's really up to you whether you want to use this component or just copy the 1 liner that is it's markup.
 */
function PageTitle(props) {
  return (
    <h1 className={cc(['atom-page-title', props.classes])}>{ props.children }</h1>
  );
}

PageTitle.propTypes = {
  /**
   * Only text may be passed as a child to be used as the page title.
   **/
  children: PropTypes.string,
  /**
   * HTML classes to be added as-is to the HTML element.
   **/
  classes: PropTypes.string,
};

PageTitle.defaultProps = {
  classes: ''
};

export default PageTitle;

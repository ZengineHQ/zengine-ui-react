import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * A MenuSlideOut is a slide-out context menu for performing actions related to a selected item, usually from
 * a list or table.
 */
function MenuSlideOut(props) {
  return (
    <div className={ classNames(['org-menu-slideout', props.classes]) }>
      { props.title && (<h5>{ props.title }</h5>) }
      { props.children }
    </div>
  );
}

MenuSlideOut.propTypes = {
  /**
   * The menu slide out title; either a plain string or a React component.
   **/
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  /**
   * The menu slide out contents; either a plain string or a React component.
   **/
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  /**
   * HTML classes to be added as-is to the HTML element.
   **/
  classes: PropTypes.string,
};

MenuSlideOut.defaultProps = {
  classes: '',
};

export default MenuSlideOut;

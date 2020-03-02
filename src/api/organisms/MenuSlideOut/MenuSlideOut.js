import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Overlay from 'react-bootstrap/Overlay';

/**
 * A MenuSlideOut is a slide-out context menu for performing actions related to a selected item, usually from
 * a list or table.
 */
function MenuSlideOut(props) {
  const [open, setOpen] = useState(false);
  // Hooks can't be called conditionally.
  const fallbackRef = useRef(null);
  const target = props.target || fallbackRef;

  const toggleSlideOut = () => {
    setOpen(!open);
  };

  const closeSlideOut = () => {
    setOpen(false);
    if (props.onClose && typeof props.onClose === 'function') {
      props.onClose();
    }
  };

  const data = props.data && typeof props.data === 'function' ? props.data() : null;

  // We use an inline-block wrapper for the onClick event so we can attach it to just the contents and not the entire
  // containing area. If convenient we can decide to require a component as children and then wrap it with the
  // onChange prop added instead... for now this is simple and works fine.
  return (
    <>
      <Overlay
        container={ target.current }
        target={ target.current }
        show={ open }
        placement="left"
      >
        { () => (
          <div className={ classNames(['org-menu-slideout', props.classes]) } tabIndex="-1" role="dialog">
            <div className="modal-content">
              <div className="modal-header">
                { props.title && (
                  <h5 className="modal-title">
                    { props.titleIcon && (<i className={ `fas fa-${ props.titleIcon } mr-3` } />) }
                    { props.title }
                  </h5>
                ) }
                <button type="button" className="close" aria-label="Close" onClick={ closeSlideOut }>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                { data }
              </div>
            </div>
          </div>
        ) }

      </Overlay>

      <div className="d-inline-block" onClick={ toggleSlideOut }>
        { props.children }
      </div>
    </>
  );
}

MenuSlideOut.propTypes = {
  /**
   * The menu slide out title; either a plain string or a React component.
   **/
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  /**
   * Data loader; a function that will return either a string or a component to render in the slide out when it gets
   * triggered. Designed this way for performance so each row's data is effectively lazy-loaded.
   **/
  data: PropTypes.func.isRequired,
  /**
   * The menu slide out trigger; either a plain string or a React component.
   **/
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * HTML classes to be added as-is to the slide out element.
   **/
  classes: PropTypes.string,
  /**
   * A ref for an HTML element where this should be attached. Overrides the default behavior.
   **/
  target: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  /**
   * Optional. A Font Awesome icon to add to the slideOut title.
   **/
  titleIcon: PropTypes.string,
  /**
   * Callback for when the slideOut is closed.
   **/
  onClose: PropTypes.func
};

MenuSlideOut.defaultProps = {
  classes: '',
};

export default MenuSlideOut;

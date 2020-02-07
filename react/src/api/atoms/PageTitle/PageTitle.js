import React from 'react';
import PropTypes from 'prop-types';

/**
 * A Label is used to annotate form inputs by including an HTML `label` element.
 *
 * Unless you are building custom Input molecules or something along those lines you will probably never use this directly.
 */
function PageTitle(props) {
  return (
    <h1 className="atom-page-title">{ props.children }</h1>
  );
}

PageTitle.propTypes = {
  /**
   * Only text may be passed as a child to be used as the page title.
   **/
  children: PropTypes.string,
};

export default PageTitle;

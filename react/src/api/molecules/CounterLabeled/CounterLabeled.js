import React from 'react';
import PropTypes from 'prop-types';

import formatPlural from '../../util/formatPlural';

/**
 * Counted Labeled will display a large numeric text with a smaller label below it.
 *
 * Use this to display summary info such as KPIs.
 */
function CounterLabeled(props) {
  const plural = formatPlural(props.count, props.word, props.suffix);

  return (
    <article className="mol-counter-labeled" title={`${props.count} ${plural}`}>
      <span>{ props.count }</span>
      <small>{ plural }</small>
    </article>
  );
}

CounterLabeled.propTypes = {
  count: PropTypes.number,
  word: PropTypes.string,
  suffix: PropTypes.string
};

CounterLabeled.defaultProps = {
  count: 0,
  word: 'Item',
  suffix: 's'
};

export default CounterLabeled;

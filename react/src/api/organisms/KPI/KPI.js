import React from 'react';
import PropTypes from 'prop-types';

import CounterLabeled from '../../molecules/CounterLabeled/CounterLabeled';

/**
 * KPI displays a group of Counter Labeled elements in containing box.
 */
function KPI(props) {
  return (
    <section className="org-kpi">
      { props.items.map((item, index) => (
        <CounterLabeled { ...item } key={ index }/>
      )) }
    </section>
  );
}

KPI.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    count: PropTypes.number,
    label: PropTypes.string,
  }))
};

KPI.defaultProps = {
  items: []
};

export default KPI;

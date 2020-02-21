import React from 'react';
import PropTypes from 'prop-types';

import CounterLabeled from '../../molecules/CounterLabeled/CounterLabeled';

/**
 * KPI displays a group of Counter Labeled elements in containing box.
 */
function KPI(props) {
  return (
    <section className="org-kpi d-flex flex-row justify-content-around border pt-3 pb-3">
      { props.items.map((item, index) => (
        <CounterLabeled { ...item } key={ index } classes="border-right flex-grow-1"/>
      )) }
    </section>
  );
}

KPI.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    count: PropTypes.number,
    label: PropTypes.string,
  })),
};

KPI.defaultProps = {
  items: []
};

export default KPI;

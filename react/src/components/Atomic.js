import React from 'react';
import PropTypes from 'prop-types';

const Atomic = ({title, children}) => (
  <div className='guide-component-name'>{title}</div>
);

Atomic.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string.isRequired,
  usage: PropTypes.string,
};

export default Atomic;

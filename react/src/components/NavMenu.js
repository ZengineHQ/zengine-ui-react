import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => (
  <div style={{marginBottom: '1rem'}}>
    <ul>
      <li style={{display: 'inline-block'}}>
        <Link to="/">Home</Link>
      </li>
      <li style={{display: 'inline-block', marginLeft: '1rem'}}>
        <Link to="/style-guide">Style Guide</Link>
      </li>
      <li style={{display: 'inline-block', marginLeft: '1rem'}}>
        <Link to="/forms">Forms</Link>
      </li>
    </ul>
  </div>
);

export default NavMenu;

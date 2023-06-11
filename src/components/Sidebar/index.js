import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <Link to="/" onClick={toggleSidebar}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/teachers" onClick={toggleSidebar}>
            Teachers
          </Link>
        </li>
        <li>
          <Link to="/students" onClick={toggleSidebar}>
            Students
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

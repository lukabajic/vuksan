import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          {/* klik na link komponentu vodi na to sta se prosledi */}
          <Link to="/" onClick={toggleSidebar}>
            Dashboard
          </Link>
        </li>
        <li>
          {/* onClick mora da se ode na stranicu */}
          {/* i da se zatvori sidebare */}
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

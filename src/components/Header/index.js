import React from 'react';
import './styles.css';

function Header({ toggleSidebar, isSidebarOpen }) {

  const handleSidebarToggle = () => {
    toggleSidebar(!isSidebarOpen);
  };

  return (
    <header className="header">
      <div className="header__burger" onClick={handleSidebarToggle}>
        <div className={`header__burger-line ${isSidebarOpen ? 'active' : ''}`} />
        <div className={`header__burger-line ${isSidebarOpen ? 'active' : ''}`} />
        <div className={`header__burger-line ${isSidebarOpen ? 'active' : ''}`} />
      </div>
      <h1 className="header__title">Vuksan School Dashboard</h1>
    </header>
  );
}

export default Header;

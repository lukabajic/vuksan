import React from 'react';
import './styles.css';

// Header
// Ovaj gornji fiksirani deo gde stoji ime aplikacije
// i ona burger meni ikonica
function Header({ toggleSidebar, isSidebarOpen }) {

  const handleSidebarToggle = () => {
    toggleSidebar(!isSidebarOpen);
  };

  return (
    <header className="header">
      {/* Klik na ikonicu otvara meni sa strane */}
      <div className="header__burger" onClick={handleSidebarToggle}>
        {/* to je ovde iznad */}
        <div className={`header__burger-line ${isSidebarOpen ? 'active' : ''}`} />
        <div className={`header__burger-line ${isSidebarOpen ? 'active' : ''}`} />
        <div className={`header__burger-line ${isSidebarOpen ? 'active' : ''}`} />
      </div>
      {/* Ime sajta */}
      <h1 className="header__title">Vuksan School Dashboard</h1>
    </header>
  );
}

export default Header;

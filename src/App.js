// React komponente
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Napravljene
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AppRouter from './Router';

// Glavna komponenta
function App() {
  // React logika
  // State aplikacije
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Funkcija
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // HTML kod
  return (
    <div className="App">
      <Router>
        {/* React komponenente napravljene koje  */}
        {/* prikazane kao html na stranici */}
        <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* Rute odnosno stranice */}
        {/* Ruter zna koju ce stranicu da prikaze */}
        {/* U zavisnosti od URL-a */}
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;

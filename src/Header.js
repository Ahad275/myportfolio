import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <div className="logo">
        <span>&lt;</span>
        <Link className="namelinkhome" to="/" onClick={() => setMenuActive(false)}><span> MohammadAhad/</span></Link>
        <span>&gt;</span>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>
      <nav className={`Headitem ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuActive(false)}>Home</Link></li>
          <li><Link to="/Education" onClick={() => setMenuActive(false)}>Education</Link></li>
          <li><Link to="/Project" onClick={() => setMenuActive(false)}>Project</Link></li>
          <li><Link to="/Contact" onClick={() => setMenuActive(false)}>Contact</Link></li>
          <li><a href="https://drive.google.com/file/d/1cT8nKDtObxOH13sOibdYrJadJkaJ78Nk/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" onClick={() => setMenuActive(false)}>Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

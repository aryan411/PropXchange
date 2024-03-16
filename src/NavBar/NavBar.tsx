import React, { useState } from 'react';
import './navBar.css'; // Import the CSS file

const Navbar: React.FC = () => {
 const [isOpen, setIsOpen] = useState<boolean>(false); // State to control the visibility of the mobile menu

 return (
    <header className="header">
      <div className="logo">PropXchange</div>
      <nav>
        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <li>Home</li>
          <li>About</li>
        </ul>
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
 );
};

export default Navbar;

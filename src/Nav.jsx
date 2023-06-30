import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown flex justify-between gap-3">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Menu
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Company
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Careers
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        About
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavMenuItem = ({text, iconLink, link, selected}) => {
  return (
    <div className="nav_menu__item">
      <Link to={link} className={selected ? "checked active" : ""}>
        <img src={iconLink} alt="icon" />
        <span>{text}</span>
      </Link>
    </div>
  )
}

export default NavMenuItem;
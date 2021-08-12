import React from 'react';
import './style.css';

const NavMenuItem = ({text, iconLink, link, selected}) => {
  return (
    <div className="nav_menu__item">
      <a href={link} className={selected ? "checked active" : ""}>
        <img src={iconLink} alt="icon" />
        <span>{text}</span>
      </a>
    </div>
  )
}

export default NavMenuItem;
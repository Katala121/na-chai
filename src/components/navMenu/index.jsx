import React from 'react';
import NavMenuItem from '../navMenuItem/index';
import { useLocation } from 'react-router-dom';
import './style.css';

const NavMenu = () => {

  const location = useLocation();

  return (
    <div className="nav_menu">
      <NavMenuItem text="Статистика" iconLink="https://na-chai.ru/images/dist/navitem-icon-1.svg" link="/statistic" selected={location.pathname === '/statistic'}/>
      <NavMenuItem text="Управление персоналом" iconLink="https://na-chai.ru/images/dist/navitem-icon-2.svg" link="/management" selected={location.pathname === '/management'}/>
      <NavMenuItem text="Настройки" iconLink="https://na-chai.ru/images/dist/navitem-icon-3.svg" link="/settings" selected={location.pathname === '/settings'}/>
      <NavMenuItem text="QR коды" iconLink="https://na-chai.ru/images/dist/navitem-icon-4.svg" link="/qr" selected={location.pathname === '/qr'}/>
      <NavMenuItem text="POS материалы" iconLink="https://na-chai.ru/images/dist/navitem-icon-5.svg" link="/pos" selected={location.pathname === '/pos'}/>
      <NavMenuItem text="Техническая поддержка" iconLink="https://na-chai.ru/images/dist/navitem-icon-6.svg" link="/support" selected={location.pathname === '/support'}/>
    </div>
  )
}

export default NavMenu;
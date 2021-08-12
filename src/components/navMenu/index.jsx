import React from 'react';
import NavMenuItem from '../navMenuItem/index';
import './style.css';

const NavMenu = () => {
  return (
    <div className="nav_menu">
      <NavMenuItem text="Статистика" iconLink="https://na-chai.ru/images/dist/navitem-icon-1.svg" link="/statisitc" selected={false}/>
      <NavMenuItem text="Управление персоналом" iconLink="https://na-chai.ru/images/dist/navitem-icon-2.svg" link="/management" selected={false}/>
      <NavMenuItem text="Настройки" iconLink="https://na-chai.ru/images/dist/navitem-icon-3.svg" link="/sattings" selected={true}/>
      <NavMenuItem text="QR коды" iconLink="https://na-chai.ru/images/dist/navitem-icon-4.svg" link="/qr" selected={false}/>
      <NavMenuItem text="POS материалы" iconLink="https://na-chai.ru/images/dist/navitem-icon-5.svg" link="/pos" selected={false}/>
      <NavMenuItem text="Техническая поддержка" iconLink="https://na-chai.ru/images/dist/navitem-icon-6.svg" link="/support" selected={false}/>
    </div>
  )
}

export default NavMenu;
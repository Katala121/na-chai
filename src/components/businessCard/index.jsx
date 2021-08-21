import React from 'react';
import './style.css';

const BusinessCard = ({linkToImage, imgAlt}) => {
  return (
    <div className="pos_page__item item_pos">
      <div className="item_pos__title">Визитка черно-белая (90×50 мм)</div>
      <div className="item_pos__image_wrap">
        <img src={linkToImage} alt={imgAlt} />
      </div>
      <button className="item_pos__save_btn btn">Сохранить</button>
    </div>
  )
}

export default BusinessCard;
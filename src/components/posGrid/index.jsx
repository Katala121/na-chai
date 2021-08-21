import React from 'react';
import BusinessCard from '../businessCard';
import './style.css';

const PosGrid = () => {
  return (
    <div className="pos_page__grid">
      <div className="pos_page__row">
        <BusinessCard linkToImage="https://na-chai.ru/images/dist/item-pos-image-1.svg" imgAlt="Визитка черно-белая (90×50 мм)"/>
        <BusinessCard linkToImage="https://na-chai.ru/images/dist/item-pos-image-2.svg" imgAlt="Визитка черно-белая (90×50 мм)"/>
        <BusinessCard linkToImage="https://na-chai.ru/images/dist/item-pos-image-3.svg" imgAlt="Визитка черно-белая (90×50 мм)"/>
        <BusinessCard linkToImage="https://na-chai.ru/images/dist/item-pos-image-4.svg" imgAlt="Визитка черно-белая (90×50 мм)"/>
      </div>
      <div className="pos_page__row">
        <BusinessCard linkToImage="https://na-chai.ru/images/dist/item-pos-image-5.svg" imgAlt="Визитка черно-белая (90×50 мм)"/>
        <BusinessCard linkToImage="https://na-chai.ru/images/dist/item-pos-image-6.svg" imgAlt="Визитка черно-белая (90×50 мм)"/>
        <BusinessCard linkToImage="https://na-chai.ru/images/dist/item-pos-image-7.svg" imgAlt="Визитка черно-белая (90×50 мм)"/>
        <BusinessCard linkToImage="https://na-chai.ru/images/dist/item-pos-image-8.svg" imgAlt="Визитка черно-белая (90×50 мм)"/>
      </div>
    </div>
  )
}

export default PosGrid;
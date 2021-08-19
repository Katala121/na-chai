import React from 'react';
import './style.css';

const Card = () => {
  return (
    <li className="card_item">
      <div className="card_item__number">•••• •••• •••• 9577</div>
      <div className="card_item__date_wrap">
        <span className="card_item__date_title">До</span>
        <span className="card_item__date">07/2024</span>
      </div>
      <div className="card_item__cvc_wrap">
        <span className="card_item__cvc_title">CVC2/CVV2</span>
        <span className="card_item__cvc">•••</span>
      </div>
      <div className="card_item__bank_name">
        <img src="https://na-chai.ru/images/dist/tinkoff-letters.svg" alt="Tinkoff" />
      </div>
    </li>
  )
}

export default Card;
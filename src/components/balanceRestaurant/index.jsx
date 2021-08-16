import React from 'react';
import ButtonDistribute from '../buttons/buttonDistribute';
import ButtonOutputMoney from '../buttons/buttonOutput';
import './style.css';

const BalanceRestaurant = () => {
  return (
    <div className="statistic_page__balance">
      <h1 className="statistic_page__header">Статистика</h1>
      <div className="statistic_page__money_actions">
        <div className="statistic_page__money_amount">
          <div className="money_amount__title">Кошелек заведения</div>
          <div className="money_amount__number_wrap">
            <span className="money_amount__number">3500,00</span>
            <span className="mouney_amount__currency">₽</span>
          </div>
        </div>
          <ButtonDistribute />
          <ButtonOutputMoney />
      </div>
      <div className="statistic_page__date_wrap date">
        <div className="date_wrap">
          <input type="text" name="from" className="date__date _date"/>
          <span> - </span>
          <input type="text" name="to" className="date__date _date"/>
        </div>
        <button className="date__choose_button">
          <img src="https://na-chai.ru/images/dist/filter-icon.svg" alt="Выбрать дату" />
        </button>
      </div>
    </div>
  )
}

export default BalanceRestaurant;
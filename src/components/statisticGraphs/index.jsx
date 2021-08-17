import React from 'react';
import Graphs from '../graphs';
import './style.css';

const StatisticGraphs = () => {
  return (
    <div className="statistic_graphs">
      <div className="statistic_page__chart_wrap statistic_page__amount_of_transfers_chart_wrap">
        <h3 className="statistic_page__title">Сумма переводов по дням</h3>
        <div className="statistic_page__chart">
          <Graphs />
        </div>
      </div>
      <div className="statistic_page__chart_wrap statistic_page__amount_of_transfers_chart_wrap">
        <h3 className="statistic_page__title">Количество переводов по дням</h3>
        <div className="statistic_page__chart">
          <Graphs />
        </div>
      </div>
      <div className="statistic_page__tip_statistic">
        <h3 className="statistic_page__tip_statistic_title">Текущая cтатистика чаевых</h3>
        <ul className="statistic_page__tip_statistic_list">
          <li className="statistic_item">
            <div className="statistic_item__number">2</div>
            <div className="statistic_item__description">сегодня</div>
          </li>
          <li className="statistic_item">
            <div className="statistic_item__number">8</div>
            <div className="statistic_item__description">вчера</div>
          </li>
          <li className="statistic_item">
            <div className="statistic_item__number">61</div>
            <div className="statistic_item__description">за неделю</div>
          </li>
          <li className="statistic_item">
            <div className="statistic_item__number">162</div>
            <div className="statistic_item__description">за месяц</div>
          </li>
          <li className="statistic_item">
            <div className="statistic_item__number">5</div>
            <div className="statistic_item__description">среднее за день</div>
          </li>
          <li className="statistic_item">
            <div className="statistic_item__number">150</div>
            <div className="statistic_item__description">среднее за месяц</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StatisticGraphs;
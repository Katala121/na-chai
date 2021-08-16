import React from 'react';
import BalanceRestaurant from '../../components/balanceRestaurant';
import StatisticGraphs from '../../components/statisticGraphs';
import './style.css';

const StatisticPage = () => {
  return (
    <div className="statistic_page">
      <BalanceRestaurant />
      <StatisticGraphs />
    </div>
  )
}

export default StatisticPage;
import React from 'react';
import BalanceRestaurant from '../../components/balanceRestaurant';
import StatisticGraphs from '../../components/statisticGraphs';
import TableStatistic from '../../components/tableStatistic';
import './style.css';

const StatisticPage = () => {
  return (
    <div className="statistic_page">
      <BalanceRestaurant />
      <StatisticGraphs />
      <TableStatistic />
    </div>
  )
}

export default StatisticPage;
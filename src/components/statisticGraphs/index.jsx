import React from 'react';
import './style.css';

const StatisticGraphs = () => {
  return (
    <div className="statistic_graphs">
      <div className="statistic_page__chart_wrap statistic_page__amount_of_transfers_chart_wrap">
        <h3 className="statistic_page__title">Сумма переводов по дням</h3>
        <div className="statistic_page__chart">
          <iframe className="chartjs_hidden_iframe" tabIndex="-1">
            <document>
              <html>
                <head></head>
                <body></body>
              </html>
            </document>
          </iframe>
          <canvas className="statistic_page__amount_of_transfers_chart" height="200" width="532" id="amount-of-transfers-chart" style={{display: "block"}}></canvas>
        </div>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  )
}

export default StatisticGraphs;
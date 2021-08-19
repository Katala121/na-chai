import React from 'react';
import ButtonDistribute from '../buttons/buttonDistribute';
import ButtonOutputMoney from '../buttons/buttonOutput';
import './style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BalanceRestaurant = () => {
  const [startDate, setStartDate] = React.useState(new Date());

  const datePickerWrap = React.forwardRef(null);

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <input type="text" name="to" onClick={onClick} ref={ref} className="date__date _date" value={value}/>
  ));

  const onDatePickersHidde = () => {
    console.log(datePickerWrap.current);
    datePickerWrap.current.classList.toggle('active');
  }

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
        <div className="date_wrap" ref={datePickerWrap}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
            dateFormat="dd.MM.yyyy"
          />
          <span> - </span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
            dateFormat="dd.MM.yyyy"
          />
        </div>
        <button className="date__choose_button" onClick={onDatePickersHidde}>
          <img src="https://na-chai.ru/images/dist/filter-icon.svg" alt="Выбрать дату" />
        </button>
      </div>
    </div>
  )
}

export default BalanceRestaurant;
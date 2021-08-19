import React from 'react';
import OutputManeyModal from '../../modalDialogs/outputManeyModal';
import './style.css';

const ButtonOutputMoney = () => {

  const [showModal, setShowModal] = React.useState(false);

  const onShowModal = () => {
    setShowModal(true);
  }

  return (
    <div>
      <button className="statistic_page__get_money btn" onClick={onShowModal}>
        Вывести
      </button>
      <OutputManeyModal open={showModal} close={setShowModal}/>
    </div>
  )
}

export default ButtonOutputMoney;
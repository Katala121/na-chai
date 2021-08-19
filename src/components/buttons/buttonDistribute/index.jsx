import React from 'react';
import DistributeModal from '../../modalDialogs/DistrubeModal';
import './style.css';


const ButtonDistribute = () => {

  const [showModal, setShowModal] = React.useState(false);

  const onShowModal = () => {
    setShowModal(true);
  }

  return (
    <div>
      <button className="statistic_page__spread_button btn" onClick={onShowModal}>
        Распределить
      </button>
      <DistributeModal open={showModal} close={setShowModal}/>
    </div>
  )
}

export default ButtonDistribute;
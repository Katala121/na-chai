import React from 'react';
import './style.css';

const ButtonSubmit = () => {
  return (
    <input type="submit" className="settings-form__submit-btn btn" value="Сохранить" onSubmit={() => console.log('submit')}/>
  )
}

export default ButtonSubmit;
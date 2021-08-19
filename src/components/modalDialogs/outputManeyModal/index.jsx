import React from 'react';
import './style.css';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../../card';

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-rounded': {
      borderRadius: 0,
    },
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 375,
      margin: 0,
      overflow: 'hidden',
    },
    '& .MuiDialog-paperScrollPaper': {
      maxHeight: '100%',
    },
    '& .MuiDialog-scrollBody': {
      overflowY: 'hidden',
    },
  },
  formControl: {
    minWidth: 320,
    marginBottom: 11,
  },
});

const OutputManeyModal = ({open, close}) => {
  
  const classes = useStyles();

  return (
    <div>
      <Dialog
        scroll="body"
        className={classes.root}
        open={open}
        onClose={() => close(false)}
      >
        <div className="popup__body">
          <h2 className="popup__header">Вывести средства</h2>
          <p className="popup_get_money__description">Сохраненные методы</p>
          <div className="popup_get_money__saved_methods">
            <ul className="popup_get_money__saved_cards_list">
              <Card />
              <Card />
            </ul>
            <a href="/" className="popup_get_money__add_link">Добавить карту</a>
          </div>
          <div className="popup_get_money__balance_wrap">
            <span className="popup_get_money__balance_title">Баланс:</span>
            <span className="popup_get_money__balance">3500 ₽</span>
          </div>
          <input type="submit" className="popup_form__submit_btn btn" value="Вывести средства"/>
        </div>
      </Dialog>

    </div>
  )
}

export default OutputManeyModal;
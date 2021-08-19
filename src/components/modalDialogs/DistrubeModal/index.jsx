import React from 'react';
import './style.css';
import Dialog from '@material-ui/core/Dialog';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-rounded': {
      borderRadius: 0,
    },
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 375,
    },
  },
  formControl: {
    minWidth: 320,
    marginBottom: 11,
  },
});

const DistributeModal = ({open, close}) => {
  
  const classes = useStyles();

  const [employee, setEmployee] = React.useState(1)
  const inputRef = React.useRef(null);

  const changeEmployee = (e) => {
    setEmployee(e.target.value);
  }

  const dataPlus = (e) => {
    if (e.target.tagName === 'LI') {
      inputRef.current.value = Number(inputRef.current.value) + Number(e.target.attributes['data-plus'].value);
    }
  }

  return (
    <div>
      <Dialog
      className={classes.root}
        open={open}
        onClose={() => close(false)}
      >
        <div className="popup__body">
          <h2 className="popup__header">Распределить</h2>
          <form action="post" className="popup_spread__form popup_form">
            <FormControl variant="outlined" className={classes.formControl}>
              <Select value={employee} onChange={changeEmployee}>
                <MenuItem value="1">Выберите сотрудника</MenuItem>
                <MenuItem value="2">Кто-то 1</MenuItem>
                <MenuItem value="3">Кто-то 2</MenuItem>
                <MenuItem value="4">Кто-то 3</MenuItem>
                <MenuItem value="5">Кто-то 4</MenuItem>
              </Select>
            </FormControl>
            <input type="text" className="popup_spread__amount_input" placeholder="Введите сумму" ref={inputRef}/>
            <ul className="popup_spread__offers_list" onClick={dataPlus}>
              <li data-plus="50">+50</li>
              <li data-plus="100">+100</li>
              <li data-plus="200">+200</li>
              <li data-plus="500">+500</li>
              <li data-plus="1000">+1000</li>
            </ul>
            <input type="submit" className="popup_form__submit_btn btn" value="Далее"/>
          </form>
        </div>
      </Dialog>

    </div>
  )
}

export default DistributeModal;
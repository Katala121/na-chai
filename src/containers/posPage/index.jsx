import React from 'react';
import './style.css';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import PosGrid from '../../components/posGrid';

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-rounded': {
      borderRadius: 0,
    },
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 375,
    },
    '& .MuiFormControl-root': {
      width: '100%',
    },
  },
  formControl: {
    marginBottom: 11,
    width: 255,
  },
});

const PosPage = () => {

  const classes = useStyles();
  const [employee, setEmployee] = React.useState(1)

  const changeEmployee = (e) => {
    setEmployee(e.target.value);
  }

  return (
    <div className="pos_page">
      <h1 className="pos_page__header">Pos материалы</h1>
      <p className="pos_page__description">
        Вы можете подготовить материалы к печати. Для этого достаточно выбрать один из макетов и QR-код.
        <br/>
        Выбрав макет, вы сможете сохранить файл с вашим QR-кодом, вставленным в макет, и напечатать его либо обратиться с ним в
					типографию
      </p>
      <div className="pos_page__select_wrap">
        <div className="pos_page__select_title">QR код</div>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select value={employee} onChange={changeEmployee}>
            <MenuItem value="1">Пункт #1</MenuItem>
            <MenuItem value="2">Пункт #2</MenuItem>
            <MenuItem value="3">Пункт #3</MenuItem>
            <MenuItem value="4">Пункт #4</MenuItem>
            <MenuItem value="5">Пункт #5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <PosGrid />
    </div>
  )
}

export default PosPage;
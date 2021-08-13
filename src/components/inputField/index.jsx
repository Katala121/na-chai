import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import './style.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginBottom: 30,
    '& .MuiInputBase-input': {
      borderRadius: 4,
      border: '1px solid #d8d8d8',
      backgroundColor: '#fff',
      display: 'flex',
      padding: '0 15px',
      height: 38,
      '&:required:valid': {
        borderColor: 'green',
      },
      '&:focus:required:invalid': {
        borderColor: 'red',
      },
    },
    '& .MuiInputBase-root': {
      width: '100%',
    },
    '& .MuiFormLabel-root': {
      fontWeight: 700,
      lineHeight: '18px',
      color: '#000',
      marginBottom: 5,
      fontSize: '14px',
    },
  },
});

const InputField = ({label, placeholder, required}) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InputLabel htmlFor="validation-outlined-input">{label}</InputLabel>
      <InputBase
        required={required ? true : false}
        variant="outlined"
        id="validation-outlined-input"
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputField;

import React from 'react';
import './style.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { data } from './data.js';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import { TableSortLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const SettingsIcon = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="settings_icon">
      <MoreHorizOutlinedIcon
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      />
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        onM
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <button className="column_settings__watch_button">Просмотр</button>
        <button className="column_settings__fire_button">Уволить</button>
      </Popover>
    </div>
  )
}

const TableStatistic = () => {
  return (
    <div className="statistic_table__wrap">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <img src="https://na-chai.ru/images/dist/settings-icon.svg" alt="Настройки" />
              </TableCell>
              {
                data.columns.map(column => (
                  <TableCell key={column.id}>
                    {column.name}
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={createSortHandler(headCell.id)}
                    >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                    <span className={classes.visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </span>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.data.map(row => (
                <TableRow key={row.id}>
                  <TableCell>
                    <SettingsIcon />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.summTips}</TableCell>
                  <TableCell>{row.rating}</TableCell>
                  <TableCell>{row.feedbacks}</TableCell>
                  <TableCell>{row.good}</TableCell>
                  <TableCell>{row.bad}</TableCell>
                  <TableCell>{row.averageTipAmount}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TableStatistic;
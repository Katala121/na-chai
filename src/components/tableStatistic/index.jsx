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

const useStylesIcon = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const SettingsIcon = () => {
  const classes = useStylesIcon();
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 1300,
    '& .MuiTableRow-head .MuiTableCell-root': {
      borderBottom: '2px solid #f6f6f6',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    '& .MuiTableCell-root': {
      borderBottom: 'none',
      borderRight: '1px solid #f6f6f6',
    },
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const TableStatistic = () => {
  const classes = useStyles();

  const [orderBy, setOrderBy] = React.useState(null);
  const [order, setOrder] = React.useState('asc');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const getComparator = (order, orderBy) => {
    return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  return (
    <div className="statistic_table__wrap">
      <div className="statistic_table__manager_wrap">
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <img src="https://na-chai.ru/images/dist/settings-icon.svg" alt="Настройки" />
              </TableCell>
              {
                data.columns.map(column => (
                  <TableCell
                  key={column.id}
                  sortDirection={orderBy === column.name ? order : false}
                  onClick={(e) => handleRequestSort(e, column.sortField)}
                  >
                    {column.name}
                    <TableSortLabel
                      active={orderBy === column.sortField}
                      direction={orderBy === column.sortField ? order : 'asc'}
                      >
                    {orderBy === column.name ? (
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
              stableSort(data.data, getComparator(order, orderBy)).map(row => (
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
    </div>
  )
}

export default TableStatistic;
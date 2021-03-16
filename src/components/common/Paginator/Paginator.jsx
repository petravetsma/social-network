import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Paginator = (props) => {
  let totalPagesCount;
  if (props.totalUsersCount && props.pageSize) {
    totalPagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  } else {
    totalPagesCount = 10;
  }
  const classes = useStyles();
  return (
    <div>
      <Pagination className={classes.root}
                  page={props.pageCount}
                  count={totalPagesCount}
                  onChange={props.onPageChange}
      />
    </div>
  );
}

export default Paginator;

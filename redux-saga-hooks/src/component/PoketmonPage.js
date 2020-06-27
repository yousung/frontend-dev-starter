import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const PoeketmonPage = ({count, page, setPage}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={count} onChange={(e, page)=>{
        setPage(page);
      }} variant="outlined" shape="rounded" />
    </div>
  );
};

export default PoeketmonPage;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));
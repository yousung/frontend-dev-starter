import React, {useEffect} from 'react';
import Poketmon from '../component/Poketmon';
import {actions} from '../module/poketmon';
import {useDispatch, useSelector} from 'react-redux';
import PoketmonLimit from '../component/PoketmonLimit';
import PoeketmonPage from '../component/PoketmonPage';

const PoketmonContainer = () => {
  const {limit, page, poketmons} = useSelector((state) => state.poketmon, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.callPoketmonList());
  }, [limit, page]);

  const onChangePage = ({currentTarget: {value}}) => {
    dispatch(actions.setLimit(value));
  };

  const nextPage = () => {
    dispatch(actions.setPage(page + 1));
  };
  const prevPage = () => {
    dispatch(actions.setPage(page - 1));
  };

  return (
    <div>
      <div>
        <PoketmonLimit changePage={onChangePage} />
        <PoeketmonPage page={page} next={nextPage} prev={prevPage} />
      </div>

      <div>
        {poketmons.map((poketmon) => (
          <Poketmon key={poketmon.name} poketmon={poketmon} />
        ))}
      </div>
    </div>
  );
};

export default PoketmonContainer;

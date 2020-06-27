import React, {useEffect} from 'react';
import Poketmon from '../component/Poketmon';
import {actions} from '../module/poketmon';
import {useDispatch, useSelector} from 'react-redux';
import PoketmonPage from '../component/PoketmonPage';

const PoketmonContainer = () => {
  const dispatch = useDispatch();
  const {limit, page, poketmons, list} = useSelector((state) => state.poketmon, []);

  useEffect(() => {
    dispatch(actions.callPoketmonList());
  }, [limit, page]);


  const setPage = (page) => {
    dispatch(actions.setPage(page));
  };

  return (
    <div>
      <div>
        <PoketmonPage count={Math.ceil(list.length / limit)} page={page} setPage={setPage} />
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

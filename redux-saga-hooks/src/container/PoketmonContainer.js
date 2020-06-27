import React, {useEffect} from 'react';
import Poketmon from '../component/Poketmon';
import {actions} from '../module/poketmon';
import {useDispatch, useSelector} from 'react-redux';
import PoketmonPage from '../component/PoketmonPage';
import styled from "styled-components";

const PoketmonContainer = () => {
  const dispatch = useDispatch();
  const {limit, page, poketmons, list} = useSelector((state) => state.poketmon, []);

  useEffect(() => {
    dispatch(actions.callPoketmonList());
    document.title = `포켓몬도감 - page ${page}`;
  }, [limit, page]);


  const setPage = (page) => {
    dispatch(actions.setPage(page));
  };

  return (
    <div>
      <div>
        <PoketmonPage count={Math.ceil(list.length / limit)} page={page} setPage={setPage} />
      </div>

      <PoketmonBox>
        {poketmons.map((poketmon) => (
          <Poketmon key={poketmon.name} poketmon={poketmon} />
        ))}
      </PoketmonBox>
    </div>
  );
};

export default PoketmonContainer;


const PoketmonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 720px;
  justify-content: center;
`
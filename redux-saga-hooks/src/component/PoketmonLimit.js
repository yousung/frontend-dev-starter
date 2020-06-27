import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";

const pages = [20, 50, 100];
const PoketmonLimitDiv = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
`;


const PoketmonSelect = styled(Select)`
  width: 150px;
  height: 50px;
  border: 1px solid #181818;
`;

const PoketmonLimit = ({changePage, initValue}) => {
  return (
    <PoketmonLimitDiv>
      <PoketmonSelect onChange={changePage} value={initValue}>
        {pages.map((limit) => (
          <MenuItem key={limit} value={limit}>
            {limit}
          </MenuItem>
        ))}
      </PoketmonSelect>
    </PoketmonLimitDiv>
  );
};

export default PoketmonLimit;

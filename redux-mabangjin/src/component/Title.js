import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  font-size: 4rem;
  /* width: 100%; */
  /* height: 100%; */
  align-self: center;
  justify-self: center;
`;

const Title = ({ children }) => {
  return <Header>{children}</Header>;
};

export default Title;

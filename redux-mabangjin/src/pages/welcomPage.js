import React from "react";
import Title from "../component/Title";
import styled from "styled-components";

const Wall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const WelcomPage = () => {
  return (
    <Wall>
      <Title>상단</Title>
      <Title>하단</Title>
    </Wall>
  );
};

export default WelcomPage;

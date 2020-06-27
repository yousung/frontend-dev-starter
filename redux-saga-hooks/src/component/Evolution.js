import React from "react";
import styled from "styled-components";

const EvolutionBox = styled.div`
  margin-top: -5px;
  margin-left: 20px;
`

const Evolution = ({evolutions, typeName }) => {
  if(!evolutions) return null;

  const EvolutionItems = evolutions.map(evolution => (
    <EvolutionBox key={evolution.num}>
      <p>- [{evolution.num}] {evolution.name}</p>
    </EvolutionBox>
  ));

  return <div>
    {typeName} : {EvolutionItems}
  </div>
}

export default Evolution;
import React from 'react';
import styled from "styled-components";
import Evolution from "./Evolution";

const Poketmon = ({poketmon}) => {

  return(
    <Card>
      <ImageBox>
        <Number>No. {poketmon.num}</Number>
        <Image src={`https://www.serebii.net/swordshield/pokemon/${poketmon.num}.png`} />
        <Name>{poketmon.name}</Name>
      </ImageBox>
      <Content>
        <p>타입 : {poketmon.type}</p>
        <p>크기 : {poketmon.height}</p>
        <p>공격 : {poketmon.weaknesses.join(', ')}</p>
        {poketmon.egg ? (<p>알크기 : {poketmon.egg}</p>) : null }
        <Evolution typeName="이전진화" evolutions={poketmon.prev_evolution} />
        <Evolution typeName="다음진화" evolutions={poketmon.next_evolution} />
      </Content>
    </Card>
  )
};

export default Poketmon;

// CSS

const Card = styled.div`
  display: flex;
  border: 1px solid #181818;
  width: 550px;
  height: 250px;
  margin: 20px;
`

const ImageBox = styled.div`
  color : #181818;
  position: relative;
  display: flex;
  height: 250px;
  flex: 4;
  border-right: 1px solid #181818;
  align-self: center;
  justify-self: center;
  flex-direction: column;
`

const Image = styled.img`
   height: 200px;
   flex : 8
`

const Name = styled.div`
  flex : 2;
  height: 50px;
  align-self: center;
  justify-self: center;
`
const Number = styled.div`
  position: absolute;
  height: 50px;
  align-self: center;
  justify-self: center;
  left: 5px;
  top: 5px;
  font-size: medium;
`

const Content = styled.div`
  color : #181818;
  flex : 6;
  font-size: 0.9rem;
  text-align: left;
  margin : 20px 0 0 20px;
`
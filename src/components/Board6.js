import React from "react";
import styled from "styled-components";

import board6 from "../assets/images/board6.png";

const Container = styled.div`
  position: absolute;
  top: 300px;
  left: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const Board6Container = styled.div`
  width: 600px;
  height: 600px;
  background-image: url(${board6});
  background-size: cover;

 
`;

function Board6() {
  return (
    <Container>
      <Board6Container></Board6Container>
    </Container>
  );
}

export default Board6;

import React from "react";
import styled from "styled-components";

import hole1 from "../assets/images/hole1.png";

const Container = styled.div`
  position: absolute;
  top: 515px;
  left: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const JincatContainer = styled.div`
  width: 350px;
  height: 350px;
  background-image: url(${hole1});
  background-size: cover;

 
`;

function Jincat() {
  return (
    <Container>
      <JincatContainer></JincatContainer>
    </Container>
  );
}

export default Jincat;

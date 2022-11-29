import React from "react";
import styled from "styled-components";

import hole2reverse from "../assets/images/hole2reverse.png";

const Container = styled.div`
  position: absolute;
  top: 515px;
  left: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const Hole2reverseContainer = styled.div`
  width: 350px;
  height: 350px;
  background-image: url(${hole2reverse});
  background-size: cover;
`;

function Hole2reverse() {
  return (
    <Container>
      <Hole2reverseContainer></Hole2reverseContainer>
    </Container>
  );
}

export default Hole2reverse;

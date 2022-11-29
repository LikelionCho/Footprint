import React from "react";
import styled from "styled-components";

import Petdog from "../assets/images/petdog.gif";

const Container = styled.div`
  position: absolute;
  bottom: 50px;
  left: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const PetContainer = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${Petdog});
  background-size: cover;

  z-index: 0;
`;

function PetDog() {
  return (
    <Container>
      <PetContainer></PetContainer>
    </Container>
  );
}

export default PetDog;

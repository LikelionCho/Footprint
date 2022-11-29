import React from "react";
import styled from "styled-components";

import twitterbird from "../assets/images/twitterbird.png";
import PetDog from "../assets/images/petdog.gif";



const Container = styled.div`
  position: absolute;
  top: 180px;
  left: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    top: 100px;
    
  }
`;
const TwitterbirdContainer = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${twitterbird});
  background-size: cover;
  cursor: pointer;
  &:hover {
    width: 300px;
    height: 300px;
    background-image: url{${PetDog}};
  }
`;



function Twitterbird() {
  return (
    <Container>
      <TwitterbirdContainer></TwitterbirdContainer>
    </Container>
  );
}

export default Twitterbird;

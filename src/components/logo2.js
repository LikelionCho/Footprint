import React from "react";
import styled from "styled-components";

import logo2 from "../assets/images/logo2.png";

const Container = styled.div`
  position: absolute;
  top: 515px;
  left: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const Logo2Container = styled.div`
  width: 350px;
  height: 350px;
  background-image: url(${logo2});
  background-size: cover;

 
`;

function Logo2() {
  return (
    <Container>
      <Logo2Container></Logo2Container>
    </Container>
  );
}

export default Logo2;

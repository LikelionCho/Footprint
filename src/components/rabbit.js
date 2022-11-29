import React from "react";
import styled from "styled-components";

import rabbit from "../assets/images/rabbit.gif";

const Container = styled.div`
  position: absolute;
  bottom: 250px;
  right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const RabbitContainer = styled.div`
  width: 200px;
  height: 500px;
  background-image: url(${rabbit});
  background-size: cover;
`;

function Rabbit() {
  return (
    <Container>
      <RabbitContainer></RabbitContainer>
    </Container>
  );
}

export default Rabbit;

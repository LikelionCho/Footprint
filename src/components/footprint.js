import React from "react";
import styled from "styled-components";

import footprint from "../assets/images/footprint.gif";

const Container = styled.div`
  position: absolute;
  bottom: 250px;
  right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const FootprintContainer = styled.div`
  width: 200px;
  height: 500px;
  background-image: url(${footprint});
  background-size: cover;
`;

function Footprint() {
  return (
    <Container>
      <FootprintContainer></FootprintContainer>
    </Container>
  );
}

export default Footprint;

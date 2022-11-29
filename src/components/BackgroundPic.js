import React from "react";
import styled, { keyframes } from "styled-components";

import Background from "../assets/images/backgroundimage.png";

import PetDog from "./PetDog";
import Board6 from "./Board6";
import Jincat from "./hole1";
import Squirrel1 from "./squirrel1";
import Squirrel3 from "./squirrel3";
import Twitterbird from "./Twitterbird";
import Gallery from "./Carousel";
import Footprint from "./footprint";


const OutlineAni = keyframes`
{
  0%{
 border-radius: 56% 44% 34% 66% / 49% 39% 61% 51%     ;
  }
  100%{
 border-radius: 100% 0% 100% 0% / 0% 100% 0% 100% ;
  }
}
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
`;
const BackContainer = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
  background-color: teal;
  background-image: url(${Background});
  background-size: cover;
  animation: ${OutlineAni} 10s linear`;


function BackgroundPic() {
  return (
    <Container>
      <BackContainer>
   
        <PetDog></PetDog>
        <Board6></Board6>
        <Jincat></Jincat>
        <Squirrel3></Squirrel3>
        <Squirrel1></Squirrel1>
        <Twitterbird></Twitterbird>
        <Footprint></Footprint>
        <Gallery></Gallery>
      </BackContainer>
    </Container>
  );
}

export default BackgroundPic;

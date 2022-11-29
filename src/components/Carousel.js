import React from "react";
import Carousel from "better-react-carousel";
import styled from "styled-components";

const Container = styled.div`
width: 450px;
height: 300px;
position: absolute;
top: 515px;
left: 1165PX;
`

const Gallery = () => {
  return (
    <Container>
      <Carousel cols={1} rows={1} gap={10} loop>
        <Carousel.Item>
          <img
            src="https://iili.io/HK6cDE7.png"
            style={{ width: "420px", height: "350px" }}
            alt="pic"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://iili.io/HK6039s.png"
            style={{ width: "420px", height: "350px" }}
            alt="pic"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://iili.io/HK6Egn4.png"
            style={{ width: "420px", height: "350px" }}
            alt="pic"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};


export default Gallery;
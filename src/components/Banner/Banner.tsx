import { useRef, useEffect } from "react";
import { register as registerSwiper } from "swiper/element/bundle";
import styled from "styled-components";

const BannerContainer = styled.div`
  background-color: bisque;
  height: 500px;
`;

registerSwiper();

function Banner() {
  return (
    <BannerContainer>
      <swiper-container
        class="mySwiper"
        pagination="true"
        pagination-clickable="true"
        // navigation="true"
        space-between="0"
        centered-slides="true"
        autoplay-delay="2000"
        speed="1000"
        autoplay-disable-on-interaction="false"
        loop="true"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
      </swiper-container>
    </BannerContainer>
  );
}

export default Banner;

// @ts-nocheck
// https://github.com/nolimits4web/swiper/issues/6466
import { register as registerSwiper } from "swiper/element/bundle";
import styled from "styled-components";
import homeBanner1 from "./../../assets/images/banner/home_banner1.png";
import homeBanner2 from "./../../assets/images/banner/home_banner2.png";

const BannerContainer = styled.div`
  height: 720px;
`;

const BannerContentOverlay = styled.div`
  display: flex;
  align-items: flex-start;
  /* line-height: 4rem; */
  background-color: #dfc3c375;
  position: absolute;
  top: 127px;
  margin: 0;
  min-width: 100px;
  width: 1250px;
  flex-direction: column;
`;

const BannerHeader = styled.h1`
  font-family: Shopee2021;
  margin: 0;
  color: #ffffff;
  width: 40%;
  line-height: normal;
  text-align: left;
  display: flex;
  font-size: 4.3rem;
`;

const BannerText = styled.p`
  font-family: OpenSans;
  margin: 20px 0 0 0;
  color: #ffffff;
  width: 40%;
  line-height: 3rem;
  text-align: left;
  display: flex;
  font-size: 1.5rem;
`;

const DownloadAppLinks = styled.div`
  display: flex;
`

registerSwiper();

function Banner() {
  return (
    <BannerContainer>
      <swiper-container
        pagination="true"
        pagination-clickable="true"
        space-between="0"
        centered-slides="true"
        autoplay-delay="5000000"
        speed="500"
        autoplay-disable-on-interaction="true"
        loop="true"
      >
        <swiper-slide>
          <img src={homeBanner1} alt="Seabank Banner 1" loading="lazy" />
          <BannerContentOverlay>
            <BannerHeader>WELCOME TO SEABANK</BannerHeader>
            <BannerText>
              Earn up to 5% p.a. interest rate daily, with no account fees!
              Start your savings journey now!
            </BannerText>
            <DownloadAppLinks>
              Google Playstore
            </DownloadAppLinks>
          </BannerContentOverlay>
        </swiper-slide>
        <swiper-slide>
          <img src={homeBanner2} alt="Seabank Banner 1" loading="lazy" />
        </swiper-slide>
      </swiper-container>
    </BannerContainer>
  );
}

export default Banner;

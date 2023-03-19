// @ts-nocheck
// https://github.com/nolimits4web/swiper/issues/6466
import { register as registerSwiper } from "swiper/element/bundle";
import styled from "styled-components";
import homeBanner1 from "./../../assets/images/banner/home_banner1.png";
import homeBanner2 from "./../../assets/images/banner/home_banner2.png";
import googlePlay from "./../../assets/images/appStores/googlePlay.svg";
import appleStore from "./../../assets/images/appStores/appleStore.svg";
import appGallery from "./../../assets/images/appStores/appGallery.svg";
import qrCode from "./../../assets/images/appStores/qrCode.png";

const BannerContainer = styled.div`
  height: 720px;
`;

const BannerContentOverlay = styled.div`
  display: flex;
  align-items: flex-start;
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
  line-height: 2.8rem;
  text-align: left;
  display: flex;
  font-size: 1.5rem;
`;

const DownloadApps = styled.div`
  display: flex;
  flex-flow: column;
  height: 170px;
  justify-content: space-between;
`;


const DownloadAppLinks = styled.img`
  display: flex;
  width: 150px;
  height: 46px;
`;

const QRCodeImage = styled.img`
  display: flex;
  width: 162px;
  height: 162px;
`;

const BannerApps = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
  margin: 30px 0 0 0;
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
          <BannerContentOverlay className="StyleGuide">
            <BannerHeader>WELCOME TO SEABANK</BannerHeader>
            <BannerText>
              Earn up to 5% p.a. interest rate daily, with no account fees!
              Start your savings journey now!
            </BannerText>
            <BannerApps>
              <DownloadApps>
                <DownloadAppLinks src={googlePlay} />
                <DownloadAppLinks src={appleStore} />
                <DownloadAppLinks src={appGallery} />
              </DownloadApps>
              <QRCodeImage
                src={qrCode}
                alt="QR Code"
                loading="lazy"
              />
            </BannerApps>
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

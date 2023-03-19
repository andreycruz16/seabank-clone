import React from "react";
import seabank_logo from "./../../assets/seabank_logo.svg";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  width: 1260px;
  margin: 0 auto;
  flex-flow: column;
`;
const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 80px 0 48px;
`;

const SeaBankLogoImg = styled.img`
  display: flex;
`;

const AboutContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

`;
const AboutText = styled.p`
  display: flex;
  text-align: center;
  font-family: OpenSans;
  font-size: 16px;
  color: rgba(32, 35, 37, 0.6);
  width: 1050px;
  line-height: 28px;
  margin: 0 0 80px 0;
`;

function About() {
  return (
    <AboutContainer>
      <LogoContainer>
        <SeaBankLogoImg src={seabank_logo} />
      </LogoContainer>
      <AboutContent>
        <AboutText>
          SeaBank, offered by SeaBank Philippines, Inc. (A Rural Bank) is a
          mobile banking application that enables you to manage your finances
          seamlessly on your mobile phone, anytime and anywhere. You can send
          and receive transactions from both SeaBank and non-SeaBank users, all
          while earning competitive interest rates with no additional fees and
          no minimum balance.
        </AboutText>
        <AboutText>
          SeaBank is part of Sea Limited (NYSE:SE), a global consumer internet
          company founded and headquartered in Singapore and listed on the New
          York Stock Exchange. It operates three core businesses across digital
          entertainment, e-commerce, as well as digital payments and financial
          services, known as Garena, Shopee, and SeaMoney respectively.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;

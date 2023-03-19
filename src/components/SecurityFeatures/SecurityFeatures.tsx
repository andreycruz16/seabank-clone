import React from "react";
import styled from "styled-components";
import secureImg1 from "./../../assets/images/securityFeatures/secure_img_1.png";
import secureImg2 from "./../../assets/images/securityFeatures/secure_img_2.png";

const SecurityFeaturesContainer = styled.div`
  display: flex;
  font-family: OpenSans;
  flex-flow: column;
`;

const SecurityFeaturesHeading = styled.div`
  display: flex;
  margin: 0 auto 48px;
  font-size: 32px;
  font-weight: 600;
`;

const SecurityFeaturesContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1260px;
`;
const SecurityFeaturesCard = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const CardTitle = styled.h1`
  display: flex;
  margin: 24px 0 16px;
  font-size: 22px;
  color: #202325;
  line-height: 32px;
`;

const CardDescription = styled.p`
  display: flex;
  font-size: 16px;
  color: rgba(32, 35, 37, 0.6);
  text-align: center;
  width: 452px;
`;

const CardImg = styled.img`
  display: flex;
  height: 300px;
  width: 612px;
`;

function SecurityFeatures() {
  return (
    <SecurityFeaturesContainer>
      <SecurityFeaturesHeading>Security Features</SecurityFeaturesHeading>
      <SecurityFeaturesContent>
        <SecurityFeaturesCard>
          <CardImg src={secureImg1} />
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>
            Access to your account information and transactions is protected by
            a two-step verification process
          </CardDescription>
        </SecurityFeaturesCard>
        <SecurityFeaturesCard>
          <CardImg src={secureImg2} />
          <CardTitle>Encryption System</CardTitle>
          <CardDescription>
            SeaBank will protect your data and information with the latest
            encryption technology
          </CardDescription>
        </SecurityFeaturesCard>
      </SecurityFeaturesContent>
    </SecurityFeaturesContainer>
  );
}

export default SecurityFeatures;

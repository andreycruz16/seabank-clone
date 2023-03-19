import React from "react";
import styled from "styled-components";
import activeSaving1 from "./../../assets/images/savingsAccount/active_saving_1.svg";
import activeSaving2 from "./../../assets/images/savingsAccount/active_saving_2.svg";
import activeSaving3 from "./../../assets/images/savingsAccount/active_saving_3.svg";
import activeSaving4 from "./../../assets/images/savingsAccount/active_saving_4.svg";

const SavingsAccountContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1260px;
  font-family: OpenSans;
  flex-flow: column;
`;

const SavingsAccountHeaderContent = styled.div`
  display: flex;
  margin: 0 auto;
  flex-flow: column;
  align-items: center;
`;

const SavingsAccountHeader = styled.h1`
  display: flex;
  color: #202325;
  font-size: 32px;
`;

const SavingsAccountDescription = styled.p`
  display: flex;
  font-size: 16px;
  color: rgba(32, 35, 37, 0.6);
  margin-bottom: 48px;
`;

const SavingsAccountCards = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SavingsAccountCard = styled.div`
  display: flex;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.06);
  width: 280px;
  height: 288;
  padding: 16px 20px 40px;
  background-color: #fafafa;
  flex-flow: column;
  align-items: center;
  text-align: center;
`;

const CardHeader = styled.h1`
  display: flex;
  color: #202325;
  font-size: 16px;
  line-height: 28px;
  font-weight: 600;
  margin: 0;
`;

const CardDescription = styled.p`
  display: flex;
  color: #797b7c;
  margin: 0;
`;

const SavingsImg = styled.img`
  display: flex;
  width: 200px;
  height: 156px;
`;

const LearnMoreSection = styled.div`
  display: flex;
  margin: 36px auto 80px;
`;

const LearnMoreBtn = styled.a`
  display: flex;
  justify-content: center;
  background-color: #ea5f00;
  color: #ffffff;
  width: 300px;
  line-height: 56px;
  border-radius: 28px;
  text-decoration: none;
`;

function SavingsAccount() {
  return (
    <SavingsAccountContainer>
      <SavingsAccountHeaderContent>
        <SavingsAccountHeader>SeaBank Savings Account</SavingsAccountHeader>
        <SavingsAccountDescription>
          Start saving with SeaBank! Sign up easily with no maintaining balance
          and no account fees.
        </SavingsAccountDescription>
      </SavingsAccountHeaderContent>
      <SavingsAccountCards>
        <SavingsAccountCard>
          <SavingsImg src={activeSaving1} />
          <CardHeader>
            High Interest Earnings of up to 5% P.A., Credited Daily
          </CardHeader>
          <CardDescription>
            Earn more with daily crediting of interest earnings.
          </CardDescription>
        </SavingsAccountCard>
        <SavingsAccountCard>
          <SavingsImg src={activeSaving2} />
          <CardHeader>Open an Account for Free with Just 1 Valid ID</CardHeader>
          <CardDescription>
            Sign up using your phone in 5 minutes with just 1 valid ID!
          </CardDescription>
        </SavingsAccountCard>
        <SavingsAccountCard>
          <SavingsImg src={activeSaving3} />
          <CardHeader>
            No Maintaining Balance, No Hidden Charges, and No Lock-In Period.
          </CardHeader>
          <CardDescription>
            Start growing your savings with as low as ₱1
          </CardDescription>
        </SavingsAccountCard>
        <SavingsAccountCard>
          <SavingsImg src={activeSaving4} />
          <CardHeader>
            Fast & Free Transfers via InstaPay and PESONet
          </CardHeader>
          <CardDescription>
            No account fees and no hidden charges. Enjoy free fund transfers
            through InstaPay and PESONet.
          </CardDescription>
        </SavingsAccountCard>
      </SavingsAccountCards>
      <LearnMoreSection>
        <LearnMoreBtn href="#">Learn More</LearnMoreBtn>
      </LearnMoreSection>
    </SavingsAccountContainer>
  );
}

export default SavingsAccount;

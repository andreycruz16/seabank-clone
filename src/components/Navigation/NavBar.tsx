import React from "react";
import styled from "styled-components";
import SeaBankLogo from "./../../assets/seabank_logo.svg";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <Header>
      <Navigation>
        <Logo href="#">
          <img src={SeaBankLogo} alt="React Logo" />
        </Logo>
        <NavItems>
          <NavItem title={"Home"} active />
          <NavItem title={"Products & Services"} />
          <NavItem title={"Help Center"} />
          <RegisterBtn>Register for Free</RegisterBtn>
        </NavItems>
      </Navigation>
    </Header>
  );
}

const Header = styled.header`
  background-color: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Navigation = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 3.1rem;
  width: 1350px;
`;

const NavItems = styled.div`
  align-items: center;
  display: flex;
`;

const RegisterBtn = styled.a`
  background-color: #ea5f00;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  /* height: 40px; */
  /* line-height: 24px; */
  padding: 8px 22px;
`;

const Logo = styled.a`
  cursor: pointer;
  display: flex;
  /* font-size: 1.5rem; */
  height: 36px;
  /* text-decoration: none; */
  /* width: 111px; */
`;

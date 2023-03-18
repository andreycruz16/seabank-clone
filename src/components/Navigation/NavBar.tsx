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
          <NavItem title={"Products & Service"} />
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
  padding: 0 17%;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const NavItems = styled.div`
  display: flex;
  align-items: flex-end;
  /* justify-content: space-between; */
  align-items: center;
`;

const RegisterBtn = styled.div`
  display: flex;
  cursor: pointer;
  background-color: #ea5f00;
  color: #ffffff;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  padding: 8px 22px;
  line-height: 24px;
`;

const Logo = styled.a`
  display: flex;
  color: #202325;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  width: 111px;
  height: 36px;
`;

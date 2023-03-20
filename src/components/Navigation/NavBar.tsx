import React, { useState } from "react";
import styled from "styled-components";
import SeaBankLogo from "./../../assets/seabank_logo.svg";
import NavItem from "./NavItem";
import hamburgerIcon from "./../../assets/images/mobile/hamburger-icon.svg";
import closeIcon from "./../../assets/images/mobile/close-icon.svg";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuOnClick() {
    setShowMenu((value) => !value);
  }

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
          <MenuIcon src={hamburgerIcon} onClick={handleMenuOnClick} />
        </NavItems>
      </Navigation>
      <NavigationMobile showMenu={showMenu}>
        <NavItemsMobile showMenu={showMenu}>
          <NavItemMobile>Home</NavItemMobile>
          <NavItemMobile>About</NavItemMobile>
          <NavItemMobile>Anything</NavItemMobile>
        </NavItemsMobile>
      </NavigationMobile>
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

  @media (max-width: 768px) {
    height: 48px;
  }
`;

const Navigation = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 3.1rem;
  width: 100%;
  max-width: 1350px;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const NavItems = styled.div`
  align-items: center;
  display: flex;
`;

const NavigationMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.5);
    display: block;
    height: 100vh;
    left: 0;
    opacity: ${(props) => (props.showMenu ? "1" : "0")};
    position: absolute;
    right: 0;
    top: 48px;
    transition: all 0.3s ease;
    visibility: ${(props) => (props.showMenu ? "visible" : "hidden")};
    z-index: 10;
    overflow: hidden;
  }
`;

const NavItemsMobile = styled.ul`
  display: block;
  width: 229px;
  background-color: #ffffff;
  height: 100%;
  float: right;
  padding: 14px 12px;
  transition: all 0.3s ease;
  margin: 0;
  border-top: 1px solid #eeeeee;
  transform: ${(props) =>
    props.showMenu ? "translateX(0px)" : "translateX(220px)"};
`;

const NavItemMobile = styled.li`
  display: block;
`;

const RegisterBtn = styled.a`
  background-color: #ea5f00;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 22px;

  @media (max-width: 768px) {
    padding: 3px 15px;
  }
`;

const MenuIcon = styled.img`
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin: 0 0 0 5px;
  }
`;

const Logo = styled.a`
  cursor: pointer;
  display: flex;
  height: 36px;

  @media (max-width: 768px) {
    height: 28px;
  }
`;

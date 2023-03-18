import React from "react";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Header>
      <Navigation>
        <Logo href="#">Seabank</Logo>
        <div>
          <div>Hello</div>
          <div>Hi Mark</div>
          <div>Register Here</div>
        </div>
      </Navigation>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  height: 64px;
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 10;
  background-color: lightgray;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0 80px;
`;

const Logo = styled.a`
  display: flex;
  justify-content: center;
  color: #202325;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  /* text-align: center; */
`;

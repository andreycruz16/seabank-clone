import { useState } from "react";
import styled from "styled-components";

export default function NavigationMobile({ showMenu }: { showMenu: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Navigation showMenu={showMenu}>
      <NavItems showMenu={showMenu}>
        <NavItem
          active={activeIndex === 0}
          onClick={() => handleNavItemClick(0)}
        >
          {"Home"}
        </NavItem>
        <NavSeparator />
        <NavItem
          active={activeIndex === 1}
          onClick={() => handleNavItemClick(1)}
        >
          {"Products & Services"}
        </NavItem>
        <NavSeparator />
        <NavItem
          active={activeIndex === 2}
          onClick={() => handleNavItemClick(2)}
        >
          {"Help Center"}
        </NavItem>
      </NavItems>
    </Navigation>
  );
}

const Navigation = styled.div<{
  showMenu: boolean;
}>`
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

const NavItems = styled.ul<{
  showMenu: boolean;
}>`
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

const NavItem = styled.li<{ active?: boolean }>`
  display: block;
  background-color: ${(props) => (props.active ? "#fff4f4;" : "")};
  padding: 11px 12px;
  border-radius: 6px;
  color: ${(props) => (props.active ? "#ea5f00;" : "rgba(0, 0, 0, 0.87)")};
`;

const NavSeparator = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  margin: 9px 0;
  background: #eeeeee;
`;

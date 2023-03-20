import styled from "styled-components";

export default function NavigationMobile({ showMenu }: { showMenu: boolean }) {
  return (
    <NavigationMobileContainer showMenu={showMenu}>
      <NavItemsMobile showMenu={showMenu}>
        <NavItemMobile>Home</NavItemMobile>
        <NavItemMobile>About</NavItemMobile>
        <NavItemMobile>Anything</NavItemMobile>
      </NavItemsMobile>
    </NavigationMobileContainer>
  );
}

const NavigationMobileContainer = styled.div<{
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

const NavItemsMobile = styled.ul<{
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

const NavItemMobile = styled.li`
  display: block;
`;

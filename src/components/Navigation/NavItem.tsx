import styled from "styled-components";

type NavItemProps = {
  title: string;
  active?: boolean;
};

type ItemProps = {
  active?: boolean;
};

const Item = styled.div<ItemProps>`
  display: flex;
  margin-right: 4rem;
  cursor: pointer;
  color: ${props => props.active ? "#ea5f00" : "inherit"};

  &:hover {
    color: #ea5f00;
  }

  @media (max-width: 1110px) {
    display: none;
  }
`;

function NavItem({ title, active }: NavItemProps) {
  return <Item active={active}>{title}</Item>;
}

export default NavItem;

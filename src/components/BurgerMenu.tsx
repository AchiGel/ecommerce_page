import { RxHamburgerMenu } from "react-icons/rx";

import styled from "styled-components";

interface BurgerProps {
  openBurger: Function;
}

const Burger = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  @media screen and (min-width: 750px) {
    display: none;
  }
`;

export default function BurgerMenu(props: BurgerProps) {
  return (
    <Burger onClick={() => props.openBurger()}>
      <RxHamburgerMenu style={{ fontSize: "33px" }} />
    </Burger>
  );
}

import styled from "styled-components";

import { IoMdClose } from "react-icons/io";

interface BurgerMenuPageProps {
  burgerClicked: boolean;
  openBurger: Function;
}

const BurgerMenu = styled.aside`
  width: 80%;
  height: 100%;
  padding: 30px;
  float: right;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`;

const BurgerMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  background: #0000004b;
  right: 0;
`;

export default function BurgerMenuPage(props: BurgerMenuPageProps) {
  return (
    <>
      {props.burgerClicked && (
        <BurgerMenuOverlay>
          <BurgerMenu>
            <IoMdClose onClick={() => props.openBurger()} />
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </BurgerMenu>
        </BurgerMenuOverlay>
      )}
    </>
  );
}

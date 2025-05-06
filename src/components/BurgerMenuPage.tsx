import styled from "styled-components";

import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface BurgerMenuPageProps {
  burgerClicked: boolean;
  setBurgerClicked: React.Dispatch<React.SetStateAction<boolean>>;
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

const BurgerMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BurgerMenuListItem = styled.li`
  font-size: 20px;
`;

export default function BurgerMenuPage(props: BurgerMenuPageProps) {
  const location = useLocation();

  useEffect(() => {
    props.setBurgerClicked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      {props.burgerClicked && (
        <BurgerMenuOverlay>
          <BurgerMenu>
            <IoMdClose
              style={{ fontSize: "36px" }}
              onClick={() => props.setBurgerClicked(false)}
            />
            <BurgerMenuList>
              <Link to="/">
                <BurgerMenuListItem>Home</BurgerMenuListItem>
              </Link>
              <Link to="/about">
                <BurgerMenuListItem>About</BurgerMenuListItem>
              </Link>
              <Link to="products">
                <BurgerMenuListItem>Products</BurgerMenuListItem>
              </Link>
              <Link to="/contact">
                <BurgerMenuListItem>Contact</BurgerMenuListItem>
              </Link>
            </BurgerMenuList>
          </BurgerMenu>
        </BurgerMenuOverlay>
      )}
    </>
  );
}

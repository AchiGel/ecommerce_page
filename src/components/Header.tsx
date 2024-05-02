import styled from "styled-components";
import { BiLogoShopify } from "react-icons/bi";
import { useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { FurnitureItem } from "./Main";

interface HeaderContainerProps {
  isScroll: boolean;
}

interface Props {
  orders: FurnitureItem[];
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  height: 80px;
  width: 100%;
  padding-inline: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  box-shadow: ${(props) =>
    props.isScroll ? "0px 5px 20px 0px rgba(0, 0, 0, 0.75)" : "none"};
  background-color: ${(props) => (props.isScroll ? "#f1f1f1" : "transparent")};
  transition: background-color, box-shadow 0.3s ease;
`;

const HeaderLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: gray;
  cursor: pointer;
  transition: scale 0.2s ease;
  &:hover {
    scale: 0.8;
  }
`;

const HeaderNav = styled.nav`
  margin-left: 20px;
  display: flex;
  align-items: center;
  position: relative;
`;

const HeaderMenu = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  list-style: none;
`;

const HeaderMenuLinks = styled.li`
  font-weight: 300;
  font-size: 1.5rem;
  cursor: pointer;
  transition: scale 0.2s ease;
  &:hover {
    scale: 0.8;
  }
`;

const CartContent = styled.div`
  position: absolute;
  top: 75px;
  right: 30px;
  width: 330px;
  height: 200px;
  padding: 10px;
  background: white;
  border-radius: 10px;
  box-shadow: 3px 4px 6px black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
`;

const CartButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  transition: all 0.2s ease;
  margin-right: 20px;
  padding: 5px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: grey;
  }
`;

const CartProductCard = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: lightgray;
`;

export default function Header(props: Props) {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpened, setIsOpened] = useState(false);

  return (
    <HeaderContainer isScroll={isScroll}>
      <HeaderLogo>
        <BiLogoShopify style={{ fontSize: "40px" }} />
      </HeaderLogo>
      <HeaderNav>
        <CartButton
          onClick={() => {
            setIsOpened(!isOpened);
          }}
        >
          <TiShoppingCart style={{ fontSize: "30px" }} />
        </CartButton>

        {isOpened && (
          <CartContent>
            {props.orders.map((el) => (
              <CartProductCard key={el.ID}>
                <img
                  style={{ width: "24px" }}
                  src={"assets/" + el.img}
                  alt={el.title}
                />
                <h2 style={{ fontSize: "15px" }}>{el.title}</h2>
              </CartProductCard>
            ))}
          </CartContent>
        )}
        <HeaderMenu>
          <HeaderMenuLinks>Home</HeaderMenuLinks>
          <HeaderMenuLinks>About</HeaderMenuLinks>
          <HeaderMenuLinks>Products</HeaderMenuLinks>
          <HeaderMenuLinks>Contact</HeaderMenuLinks>
        </HeaderMenu>
      </HeaderNav>
    </HeaderContainer>
  );
}

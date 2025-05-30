import styled from "styled-components";
import { BiLogoShopify } from "react-icons/bi";
import { useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { FurnitureItem } from "./Main";
import { FaTrash } from "react-icons/fa";
import BurgerMenu from "./BurgerMenu";
import BurgerMenuPage from "./BurgerMenuPage";
import { Link } from "react-router-dom";

interface HeaderContainerProps {
  $isScroll: boolean;
}

interface Props {
  orders: FurnitureItem[];
  deleteOrder: Function;
}

interface ContainerProp {
  $orders: FurnitureItem[];
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
    props.$isScroll ? "0px 5px 20px 0px rgba(0, 0, 0, 0.75)" : "none"};
  background-color: ${(props) => (props.$isScroll ? "#f1f1f1" : "transparent")};
  transition: background-color, box-shadow 0.3s ease;
  @media (max-width: 768px) {
    padding-inline: 16px;
  }
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
  @media screen and (max-width: 750px) {
    display: none;
  }
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

const CartContent = styled.div<ContainerProp>`
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
  justify-content: ${(props) =>
    props.$orders.length === 0 ? "center" : "none"};
  align-items: ${(props) => (props.$orders.length === 0 ? "center" : "none")};
  @media screen and (max-width: 500px) {
    width: 200px;
    height: 200px;
  }
`;

const CartButton = styled.button<{ $orders: FurnitureItem[] }>`
  position: relative;
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
  &::after {
    position: absolute;
    content: "${(props) => props.$orders.length}";
    width: 20px;
    height: 20px;
    background-color: #cf5959;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: wheat;
    top: 0;
    right: 0;
  }
`;

const CartProductCard = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: lightgray;
  gap: 10px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export default function Header(props: Props) {
  const [isScroll, setIsScroll] = useState(false);
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

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

  return (
    <HeaderContainer $isScroll={isScroll}>
      <HeaderLogo>
        <Link to="/">
          <BiLogoShopify style={{ fontSize: "40px" }} />
        </Link>
      </HeaderLogo>
      <HeaderNav>
        <CartButton
          onClick={() => {
            setIsOpened(!isOpened);
          }}
          $orders={props.orders}
        >
          <TiShoppingCart style={{ fontSize: "30px" }} />
        </CartButton>

        {isOpened && (
          <CartContent $orders={props.orders}>
            {props.orders.length === 0
              ? "კალათა ცარიელია"
              : props.orders.map((el) => (
                  <CartProductCard key={el.ID}>
                    <img
                      style={{ width: "40px" }}
                      src={"assets/" + el.img}
                      alt={el.title}
                    />
                    <div>
                      <h2 style={{ fontSize: "15px" }}>{el.title}</h2>
                      <span>{el.price}</span>
                    </div>
                    <FaTrash
                      onClick={() => {
                        props.deleteOrder(el);
                      }}
                    />
                  </CartProductCard>
                ))}
          </CartContent>
        )}
        <HeaderMenu>
          <HeaderMenuLinks>
            <Link to="/">Home</Link>
          </HeaderMenuLinks>
          <HeaderMenuLinks>
            <Link to="about">About</Link>
          </HeaderMenuLinks>
          <HeaderMenuLinks>
            <Link to="products">Products</Link>
          </HeaderMenuLinks>
          <HeaderMenuLinks>
            <Link to="contact">Contact</Link>
          </HeaderMenuLinks>
        </HeaderMenu>
        <BurgerMenu setBurgerClicked={setBurgerClicked} />
        <BurgerMenuPage
          burgerClicked={burgerClicked}
          setBurgerClicked={setBurgerClicked}
        />
      </HeaderNav>
    </HeaderContainer>
  );
}

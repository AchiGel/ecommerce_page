import styled from "styled-components";
import { BiLogoShopify } from "react-icons/bi";
import { useEffect, useState } from "react";

interface HeaderContainerProps {
  isScroll: boolean;
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

export default function Header() {
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

  return (
    <HeaderContainer isScroll={isScroll}>
      <HeaderLogo>
        <BiLogoShopify style={{ fontSize: "40px" }} />
      </HeaderLogo>
      <HeaderNav>
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

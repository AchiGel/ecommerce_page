import styled from "styled-components";
import { BiLogoShopify } from "react-icons/bi";

const HeaderContainer = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  return (
    <HeaderContainer>
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

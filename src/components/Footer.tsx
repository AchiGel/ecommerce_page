import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;

export default function Footer() {
  return <FooterContainer>All rights reserved &copy;</FooterContainer>;
}

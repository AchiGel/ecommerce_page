import styled from "styled-components";

const imageBg = require("../imgs/bg.jpg");

const MainContainer = styled.main`
  margin-top: 100px;
`;

const SectionOne = styled.section`
  position: relative;
  background-image: url(${imageBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  background-color: #9e9e9ed9;
  width: 100%;
  height: 500px;
  border-radius: 2rem;
  &::after {
    position: absolute;
    content: "ავეჯის შოურუმი თბილისში";
    font-size: 2rem;
    font-weight: 600;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function Main() {
  return (
    <MainContainer>
      <SectionOne></SectionOne>
    </MainContainer>
  );
}

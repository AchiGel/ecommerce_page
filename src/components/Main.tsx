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

const ProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 50px;
  gap: 15px;
  justify-items: center;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #9e9e9e3b;
  max-width: 250px;
  padding: 15px;
  border-radius: 10px;
  overflow: hidden;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

interface FurnitureItem {
  ID: number;
  title: string;
  description: string;
  price: number;
  img: string;
}

interface Props {
  data: FurnitureItem[];
}

export default function Main(props: Props) {
  return (
    <MainContainer>
      <SectionOne></SectionOne>
      <ProductsSection>
        {props.data.map((el) => (
          <ProductCard key={el.ID}>
            <ProductImg src={"assets/" + el.img} alt={el.title} />
            <h1>{el.title}</h1>
            <p>{el.description}</p>
            <span>{"$" + el.price}</span>
          </ProductCard>
        ))}
      </ProductsSection>
    </MainContainer>
  );
}

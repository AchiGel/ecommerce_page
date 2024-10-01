import styled from "styled-components";
import { IoMdAddCircleOutline } from "react-icons/io";
import Categories from "./Categories";

export interface FurnitureItem {
  ID: number;
  title: string;
  description: string;
  price: number;
  img: string;
  category: string;
}

interface Props {
  data: FurnitureItem[];
  addToOrder: Function;
  selectedCategory: FurnitureItem[];
  filterCategories: Function;
}

const imageBg = require("../imgs/bg.jpg");

export const MainContainer = styled.main`
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
    content: "Furniture Showroom in Tbilisi";
    font-size: 2rem;
    font-weight: 600;
    color: white;
    width: 100%;
    text-align: center;
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
  justify-content: center;
  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 596px) {
    grid-template-columns: minmax(280px, 75%);
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #9e9e9e3b;
  padding: 15px;
  border-radius: 10px;
  overflow: hidden;
  transition: scale 0.2s ease;
  &:hover {
    scale: 1.1;
  }
`;

const ProductImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Addbutton = styled.button`
  border: none;
  outline: none;
  background-color: #cf5959;
  border-radius: 50%;
  padding: 5px;
  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;

export default function Main(props: Props) {
  return (
    <MainContainer>
      <SectionOne></SectionOne>
      <Categories filterCategories={props.filterCategories} />
      <ProductsSection>
        {props.selectedCategory.length > 0
          ? props.selectedCategory.map((el) => (
              <ProductCard key={el.ID}>
                <ProductImg src={"assets/" + el.img} alt={el.title} />
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <span style={{ color: "red" }}>{"$" + el.price}</span>
                <Addbutton
                  onClick={() => {
                    props.addToOrder(el);
                  }}
                >
                  <IoMdAddCircleOutline style={{ fontSize: "24px" }} />
                </Addbutton>
              </ProductCard>
            ))
          : props.data.map((el) => (
              <ProductCard key={el.ID}>
                <ProductImg src={"assets/" + el.img} alt={el.title} />
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <span style={{ color: "red" }}>{"$" + el.price}</span>
                <Addbutton
                  onClick={() => {
                    props.addToOrder(el);
                  }}
                >
                  <IoMdAddCircleOutline style={{ fontSize: "24px" }} />
                </Addbutton>
              </ProductCard>
            ))}
      </ProductsSection>
    </MainContainer>
  );
}

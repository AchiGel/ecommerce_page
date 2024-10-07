import styled from "styled-components";
import { MainContainer } from "../components/Main";
import data from "../DATA/furniture_data.json";

const ProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, [col-start] minmax(100px, 1fr) [col-end]);
  gap: 30px;
`;

export default function Products() {
  return (
    <MainContainer>
      <ProductsSection>
        {data.furniture_items.map((el) => (
          <div
            key={el.ID}
            style={{
              backgroundColor: "lightgray",
              padding: "1.5rem",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <h1>{el.title}</h1>
            <img
              style={{ maxWidth: "250px" }}
              src={"assets/" + el.img}
              alt={el.title}
            />
            <p>{el.description}</p>
          </div>
        ))}
      </ProductsSection>
    </MainContainer>
  );
}

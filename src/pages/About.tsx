import styled from "styled-components";
import { MainContainer, SectionOne } from "../components/Main";

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 2rem;
`;

export default function About() {
  return (
    <MainContainer>
      <SectionOne style={{ marginBottom: "2rem" }} />
      <Paragraph>
        A furniture showroom marketplace serves as a centralized platform where
        various furniture retailers, manufacturers, and designers display and
        sell their collections to a broad audience. By bringing multiple vendors
        together under one virtual or physical space, the marketplace offers
        consumers a diverse range of styles, materials, and price points, making
        it easier to compare products and make informed decisions. This setup
        benefits both buyers and sellers. Customers enjoy the convenience of
        browsing multiple brands in one location, while retailers gain access to
        a larger customer base without the overhead costs associated with
        maintaining standalone stores.
      </Paragraph>
      <Paragraph>
        In addition to its variety, a furniture showroom marketplace often
        incorporates interactive features, such as 3D visualizations, augmented
        reality tools, and customer reviews, which allow shoppers to visualize
        how pieces might fit in their homes before making a purchase. These
        features enhance the shopping experience by making it more immersive and
        personalized. Furthermore, the marketplace may offer financing options,
        delivery services, and customization capabilities, allowing consumers to
        tailor their selections to meet specific needs, resulting in a more
        streamlined and satisfying buying process. For sellers, the marketplace
        can provide valuable insights into consumer preferences and trends,
        helping them adjust their offerings to stay competitive in a dynamic
        market.
      </Paragraph>
    </MainContainer>
  );
}

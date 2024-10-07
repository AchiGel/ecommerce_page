import styled from "styled-components";
import { MainContainer } from "../components/Main";

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

export default function Contact() {
  return (
    <MainContainer>
      <Title>Contact Us</Title>
      <Paragraph>
        We’re here to help! Whether you have a question about our products, need
        assistance with an order, or are interested in partnering with us, feel
        free to get in touch using any of the following methods.
      </Paragraph>
      <SubTitle>Customer Support</SubTitle>
      <Paragraph>
        For general inquiries, product information, or assistance with your
        order:
      </Paragraph>
      <ul>
        <li>Email: support@furnitureshowroom.com</li>
        <li>Phone: +1 (800) 123-4567</li>
        <li>Live Chat: Available Monday - Friday, 9 AM - 6 PM (EST)</li>
      </ul>
      <SubTitle>Business Inquiries</SubTitle>
      <Paragraph>
        Are you a retailer or manufacturer interested in showcasing your
        furniture on our marketplace? Get in touch with our business development
        team:
      </Paragraph>
      <ul>
        <li>Email: partners@furnitureshowroom.com</li>
        <li>Phone: +1 (800) 987-6543</li>
        <li>Partnerships Inquiry Form: [Click Here]</li>
      </ul>
      <SubTitle>Visit Our Showroom</SubTitle>
      <Paragraph>
        If you’d like to see our furniture in person, we welcome you to visit
        our physical showroom:
      </Paragraph>
      <ul>
        <li>Address: 123 Furniture Ave, Design District, New York, NY 10001</li>
        <li>Hours: Monday - Saturday, 10 AM - 8 PM (EST)</li>
        <li>Phone: +1 (212) 555-7890</li>
      </ul>
      <SubTitle>Follow Us</SubTitle>
      <Paragraph>
        Stay connected and be the first to know about new arrivals, special
        offers, and design inspiration:
      </Paragraph>
      <ul>
        <li>Instagram: @furnitureshowroom</li>
        <li>Facebook: Furniture Showroom Marketplace</li>
        <li>Twitter: @furnitureshow</li>
      </ul>
    </MainContainer>
  );
}

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import styled from "styled-components";
import furniture_data from "./DATA/furniture_data.json";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-inline: 40px;
`;

function App() {
  const DATA = furniture_data.furniture_items;

  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Main data={DATA} />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;

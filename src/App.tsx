import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-inline: 40px;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;

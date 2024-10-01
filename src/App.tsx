import Header from "./components/Header";
import "./index.css";
import { useState } from "react";
import { FurnitureItem } from "./components/Main";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-inline: 40px;
`;

function App() {
  const [orders, setOrders] = useState<FurnitureItem[]>([]);

  function deleteOrder(item: FurnitureItem) {
    setOrders(orders.filter((el) => el.ID !== item.ID));
  }

  return (
    <div className="App">
      <Header orders={orders} deleteOrder={deleteOrder} />
      <Wrapper>
        <Outlet />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;

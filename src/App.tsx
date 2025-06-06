import Header from "./components/Header";
import "./index.css";
import { useEffect, useState } from "react";
import { FurnitureItem } from "./components/Main";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-inline: 40px;
  @media (max-width: 768px) {
    padding-inline: 16px;
  }
`;

function App() {
  const [orders, setOrders] = useState<FurnitureItem[]>(() => {
    const localOrders = localStorage.getItem("items");
    return localOrders ? JSON.parse(localOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(orders));
  }, [orders]);

  function deleteOrder(item: FurnitureItem) {
    setOrders(orders.filter((el) => el.ID !== item.ID));
  }

  return (
    <div className="App">
      <Header orders={orders} deleteOrder={deleteOrder} />
      <Wrapper>
        <Outlet context={{ orders, setOrders }} />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;

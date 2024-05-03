import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import styled from "styled-components";
import furniture_data from "./DATA/furniture_data.json";
import { useState } from "react";
import { FurnitureItem } from "./components/Main";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding-inline: 40px;
`;

function App() {
  const DATA = furniture_data.furniture_items;
  const [orders, setOrders] = useState<FurnitureItem[]>([]);

  function addToOrder(item: FurnitureItem) {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.ID === item.ID) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      const newOrder = item;
      setOrders((prevOrder) => [...prevOrder, newOrder]);
    }
  }

  function deleteOrder(item: FurnitureItem) {
    setOrders(orders.filter((el) => el.ID !== item.ID));
  }

  return (
    <div className="App">
      <Header orders={orders} deleteOrder={deleteOrder} />
      <Wrapper>
        <Main data={DATA} addToOrder={addToOrder} />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;

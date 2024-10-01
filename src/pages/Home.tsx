import Main, { FurnitureItem } from "../components/Main";
import furniture_data from "../DATA/furniture_data.json";
import { useState } from "react";

export default function Home() {
  const DATA = furniture_data.furniture_items;
  const [orders, setOrders] = useState<FurnitureItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<FurnitureItem[]>([]);

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

  function filterCategories(chosenCategory: string) {
    setSelectedCategory(DATA.filter((el) => el.category === chosenCategory));
  }

  return (
    <Main
      data={DATA}
      addToOrder={addToOrder}
      selectedCategory={selectedCategory}
      filterCategories={filterCategories}
    />
  );
}

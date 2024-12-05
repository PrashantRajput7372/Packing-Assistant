import Form from "../Components/Form";
import Stats from "../Components/Stats";
import PackinglList from "../Components/packinglist";
import Logo from "../Components/Logo";

import { useState } from "react";

export default function App() {
  // const items = [
  //   { id: 1, description: "Passports", quantity: 2, packed: true },
  //   { id: 3, description: "Charger", quantity: 1, packed: true },
  //   { id: 2, description: "Socks", quantity: 12, packed: true },
  // ];
  const [Items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handelRemoveItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelUpdateItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handelResetItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandel={handleAddItems} />
      <PackinglList
        items={Items}
        onRemove={handelRemoveItems}
        onToggleCheck={handelUpdateItems}
        onRestClick={handelResetItems}
      />
      <Stats items={Items} />
    </div>
  );
}

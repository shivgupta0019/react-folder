import { useState } from "react";
import Items from "./Items";

const FoodItems = ({ items }) => {
  let i = 1;
  let [activeItems, setActiveItes] = useState([]);
  let onBuyButtion = (item, evet) => {
    let newItems = [...activeItems, item];
    setActiveItes(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items
          key={i++}
          foodItems={item}
          bought={activeItems.includes(item)}
          handleBuyButtion={(evet) => onBuyButtion(item, evet)}
        ></Items>
      ))}
    </ul>
  );
};
export default FoodItems;

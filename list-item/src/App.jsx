import "./App.css";
import FoodItems from "./coponents/FoodItems";
import ErrorMessage from "./coponents/ErrorMessage";
import FoodInput from "./coponents/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  //let foodItem = [];

  // let [textShow, setTextState] = useState();
  let [foodItem, setFoodItems] = useState([]);
  // let textShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodValue = event.target.value;
      let newItems = [...foodItem, newFoodValue];
      console.log(`Food Value is:${newFoodValue}`);
      setFoodItems(newItems);
      event.target.value = "";
      // setTextState(event.target.value);
    }
  };

  return (
    <>
      <div className="containers">
        <h1>Healthy Food</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItem}></ErrorMessage>
        <FoodItems items={foodItem}></FoodItems>
      </div>
    </>
  );
}

export default App;

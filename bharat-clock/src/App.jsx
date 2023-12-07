import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import React from "react";
let foodItems = ["Dal", "Roti", "Chaval", "Subgi", "Dahi", "Milk"];
let i = 0;
function App() {
  return (
    <>
      <center>
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime>
      </center>
    </>
  );
}

export default App;

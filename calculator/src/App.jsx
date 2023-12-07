import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import DisplayOutput from "./components/DisplayOutput";
import InputButtion from "./components/InputButtion";
import { useState } from "react";
function App() {
  let [inPutButtion, setInPutButtion] = useState("");

  let onKeyButtion = (event) => {
    if (event.target.innerText === "C") {
      setInPutButtion("");
    } else if (event.target.innerText === "=") {
      let inPutButtionS = eval(inPutButtion);
      setInPutButtion(inPutButtionS);
    } else {
      let inPutButtions = inPutButtion + event.target.innerText;
      setInPutButtion(inPutButtions);
    }
  };

  return (
    <>
      <Heading></Heading>
      <div className="boderBox">
        <DisplayOutput outputDisplay={inPutButtion}></DisplayOutput>
        <InputButtion handleInputBution={onKeyButtion}></InputButtion>
      </div>
    </>
  );
}

export default App;

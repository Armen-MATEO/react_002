import React from "react";
import "./App.css";
import { Market } from "./modulner/food";
import { Weather } from "./modulner/weather";
import Exchange from "./modulner/exchange";
function App() {
  return (
    <div className="App">
      <h3>Weather around the world</h3>
      <Weather country="Armenia" city="Yerevan" day="+36 C" night="+15 C" />
      <Weather country="Grenlandia" city="Nuuk" day="+5 C" night="-25 C" />
      <h3>Super Market</h3>
      <Market name="meet" price="3900 dram" />
      <Market name="milk" price="400 dram" />
      <h3>exchange</h3>
      <Exchange currUSA="1$" currArm="490 dram" />
    </div>
  );
}

export default App;

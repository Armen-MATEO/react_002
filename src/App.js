import React from "react";
import "./App.css";
//import { Market } from "./components/Food";
//import { Weather } from "./components/Weather";
//import Exchange from "./components/Exchange";
//import { Product } from "./components/Product";
import ToDo from "./components/ToDo";
//import A from "./exercize/A";
function App() {
  return (
    <div className="App">
      <ToDo />

      {/*
      <A />
      
      <h2>super market</h2>
      <Product
        name="milk"
        made="Armenia"
        price="1$"
        rate={490}
        date="01.10.2020"
        description="Eco"
      />*/}

      {/* <h3>Weather around the world</h3>
      <Weather country="Armenia" city="Yerevan" day="+36 C" night="+15 C" />
      <Weather country="Grenlandia" city="Nuuk" day="+5 C" night="-25 C" />
      <h3>Super Market</h3>
      <Market name="meet" price="3900 dram" />
      <Market name="milk" price="400 dram" />
      <h3>exchange</h3>
      <Exchange currUSA="1$" currArm="490 dram" />*/}
    </div>
  );
}

export default App;

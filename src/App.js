import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import BootstrapDemo from "./exercize/BootstrapDemo";
import ToDo from "./components/todo/ToDo";
import AppDemo from "./exercize/AppDemo";
//import A from "./exercize/AA";

function App() {
  return (
    <div className="App">
      <ToDo />
      <AppDemo />
    </div>
  );
}

export default App;

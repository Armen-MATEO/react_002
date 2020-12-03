import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDo from "./components/pages/todo/ToDo";
import About from "./components/pages/about/About";
import SingleTask from "./components/pages/SingleTask/SingleTask";
import NotFound from "./components/pages/NotFound/NotFound";
import NavMenu from "./components/NavMenu/NavMenu";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavMenu />

      <Switch>
        <Route path="/" exact component={ToDo} />
        <Route path="/about" exact component={About} />
        <Route path="/task/:id" exact component={SingleTask} />
        <Route path="/404" exact component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;

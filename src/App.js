import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDo from "./components/pages/todo/ToDo";
import About from "./components/pages/about/About";
import SingleTask from "./components/pages/SingleTask/SingleTask";
import NotFound from "./components/pages/NotFound/NotFound";
import NavMenu from "./components/NavMenu/NavMenu";
import { Route, Switch, Redirect } from "react-router-dom";
//import RefDemo from './exercize/RefDemo';
import LifeCycles from "./exercize/lifeCycles/LifeCycles";
import Contact from "./components/pages/Contacts/Contact";

function App() {
  const routes = [
    {
      path: "/",
      component: ToDo,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/task/:id",
      component: SingleTask,
    },

    {
      path: "/contact",
      component: Contact,
    },

    {
      path: "/demo",
      /*component: RefDemo*/
      component: LifeCycles,
    },

    {
      path: "/404",
      component: NotFound,
    },
  ];

  return (
    <div className="App">
      <NavMenu />

      <Switch>
        {routes.map((item, index) => (
          <Route
            path={item.path}
            exact
            component={item.component}
            key={index}
          />
        ))}
        <Redirect to="/404" />
      </Switch>

      {/*     <Switch>
        <Route path="/" exact component={ToDo} />
        <Route path="/about" exact component={About} />
        <Route path="/task/:id" exact component={SingleTask} />
        <Route path="/404" exact component={NotFound} />
        <Redirect to="/404" />
 </Switch>*/}
    </div>
  );
}

export default App;

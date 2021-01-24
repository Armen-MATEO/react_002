import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDo from "./components/pages/todo/ToDo";
import About from "./components/pages/about/About";
import SingleTask from "./components/pages/SingleTask/SingleTask";
import NotFound from "./components/pages/NotFound/NotFound";
import NavMenu from "./components/NavMenu/NavMenu";
import { Route, Switch, Redirect } from "react-router-dom";
import Contact from "./components/pages/Contacts/Contact";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";

function App(props) {
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
      path: "/404",
      component: NotFound,
    },
  ];

  const { errorMessage, successMessage, loading } = props;

  if (errorMessage) {
    toast.error(errorMessage);
  }

  if (successMessage) {
    toast.success(successMessage);
  }

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

      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {loading && <Spinner />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage,
    successMessage: state.successMessage,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(App);

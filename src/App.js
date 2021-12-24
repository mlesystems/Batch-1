import React from "react";
/*eslint-disable*/
import "./styles/App.css";
import Header from "./components/Header";
import Slider1 from "./components/Slider1";
import Professor from "./components/Professor";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Avatar from "./components/Avatar";
import Signup from "./components/Signup";
import LoginForm from "./components/LoginForm";
import Apps from "./components/Apps";
import Courses from "./components/Courses";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/Courses">
            <Courses />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/Signup">
            <Signup />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/Login">
            <LoginForm />
            <Apps />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/">
            {" "}
            <Slider1 />
            <Professor />
            <Cards />
            <Avatar />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

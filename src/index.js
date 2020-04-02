import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/layout/Blogs";
import NoMatch from "./components/NoMatch";
import BaseLayout from "./components/layout/BaseLayout";
import CoronaVirus from "./components/CoronaVirus";
import Forms from "./components/Forms";
import LiftingState from "./components/LiftingState";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Redirect from="aboutus" to="/" />
        <Route exact path="/" component={App} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route exact path="/blogs" component={Blogs} />
        <Route path="/blogs/:blogID" component={Blogs} />
        <Route path="/coronavirus" component={CoronaVirus} />
        <Route path="/forms" component={Forms} />
        <Route path="/liftingstate" component={LiftingState} />
        <Route component={NoMatch} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);

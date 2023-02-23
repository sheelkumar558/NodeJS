import React from "react";
import "./App.css";
import {
  BrowserRouterProps,
  Route,
  Switch,
  withRouter,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Logout from "./pages/Logout/Logout";
import Task from "./pages/Task/Task";
import User from "./pages/User/User";
import Changepassword from "./pages/User/Changepassword";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/task" component={Task} />
          <Route path="/user" component={User} />
          <Route path="/logout" component={Logout} />
          <Route path="/changepassword" component={Changepassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

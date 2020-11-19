import logo from "./logo.svg";
import "./App.css";
import SignUp from "./forms/SignUp";
import Login from "./forms/Login";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/admin" />
        <PrivateRoute exact path="/student" />
        <PrivateRoute exact path="/volunteer" />
      </Switch>
    </div>
  );
}

export default App;

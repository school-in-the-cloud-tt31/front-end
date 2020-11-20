import logo from "./logo.svg";
import "./App.css";
import SignUp from "./forms/SignUp";
import Login from "./forms/Login";
import { Route, Switch } from "react-router-dom";

import StudentDashboard from "./student-components/StudentDashboard";
import VolunteerDashboard from "./volunteer-components/VolunteerDashboard";
import AdminDashboard from "./admin-components/AdminDashboard";

import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          exact
          path="/admin"
          componentType="admin"
          component={AdminDashboard}
        />
        <PrivateRoute
          exact
          path="/student"
          componentType="student"
          component={StudentDashboard}
        />
        <PrivateRoute
          exact
          path="/volunteer"
          componentType="volunteer"
          component={VolunteerDashboard}
        />
      </Switch>
    </div>
  );
}

export default App;

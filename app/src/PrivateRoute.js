import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  componentType,
  userType,
  token,
  ...rest
}) => {
  const localToken = localStorage.getItem("token");
  const localUser = localStorage.getItem("userType");
  return (
    <Route
      {...rest}
      render={() => {
        if (localToken && componentType === localUser) {
          return <Component />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
};

const mapStateToProps = (state) => {
  const { userType, token } = state;
  return {
    userType,
    token,
  };
};

export default connect(mapStateToProps, {})(PrivateRoute);

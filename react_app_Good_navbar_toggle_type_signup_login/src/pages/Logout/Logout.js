import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }

  render() {
    return (
      <div className="col-md-6 text-center" style={{ margin: " 200px auto" }}>
        <h1>You have been Logout</h1>
        <NavLink to="/"> Login Again</NavLink>
      </div>
    );
  }
}

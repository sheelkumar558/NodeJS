import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Countrydata from "./Countrydata";

export default class Home extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let LoggedIn = true;
    if (token == null) {
      LoggedIn = false;
    }
    this.state = {
      LoggedIn,
    };
  }

  render() {
    if (this.state.LoggedIn == false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Navbar />
        <Countrydata />
      </div>
    );
  }
}

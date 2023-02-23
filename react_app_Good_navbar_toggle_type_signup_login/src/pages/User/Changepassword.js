import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Table } from "reactstrap";
import { NavLink } from "react-router-dom";

const CHangepassword = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5">
        <form style={{ fontWeight: "600" }}>
          <div
            class="form-group"
            style={{
              maxWidth: "465px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <label for="staticEmail" class="col-form-label">
              Username :-
            </label>
            <div class="">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="admin"
              />
            </div>
          </div>
          <div
            class="form-group"
            style={{
              maxWidth: "485px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <label for="inputPassword" class="col-form-label">
              Password :-
            </label>
            <div class="">
              <input
                type="password"
                class="form-control border border-dark"
                id="inputPassword"
                value=""
              />
            </div>
          </div>
        </form>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "380px",
          marginLeft: "50px",
          marginTop: "250px",
        }}
      >
        <div>
          <a class="nav-link" to="#">
            <button
              type="button"
              class="btn border-secondary"
              style={{
                background: "none",
                borderRadius: "5px 5px",
                padding: "3px 30px",
              }}
            >
              Save Password
            </button>
          </a>
        </div>
        <div>
          <NavLink class="nav-link" to="/logout">
            {" "}
            <button
              type="button"
              class="btn btn-light border-secondary"
              style={{
                background: "none",
                borderRadius: "5px 5px",
                padding: "3px 45px",
              }}
            >
              {" "}
              Logout
            </button>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CHangepassword;

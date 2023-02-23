import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ background: "#EEEEEE" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/home">
            LOGO
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                class="nav-item"
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              >
                <NavLink
                  exact
                  to="/home"
                  className="nav-link main-nav"
                  activeClassName="main-nav-active"
                >
                  Home
                </NavLink>
              </li>
              <li
                class="nav-item"
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                <NavLink
                  exact
                  to="/task"
                  className="nav-link main-nav"
                  activeClassName="main-nav-active"
                >
                  Task
                </NavLink>
              </li>
              <li
                class="nav-item"
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                <NavLink
                  to="/user"
                  className="nav-link main-nav"
                  activeClassName="main-nav-active"
                >
                  User
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

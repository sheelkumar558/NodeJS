import React, { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { login } from "../Redux/Auth/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Admin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((r) => {
        if (r.type === "USER_LOGIN_SUCCESS") {
          navigate(comingFrom, { replace: true });
        }
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

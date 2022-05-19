import React, { Component } from "react";
import style from "./staticfile/Login.modules.css";
import { Link } from "react-router-dom";
import img from "./staticfile/Login.gif";

export default class Login extends Component {
  render() {
    return (
      <div style={style.Login} className="main-container">
        <div className="img-container">
          <img src={img} alt="gif-log" />
        </div>
        <form className="form">
          <div className="input-Username">
            <label className="label" htmlFor="LogInUsername">
              Username<span className="span-global">* </span>{" "}
            </label>
            <input
              type="Username"
              name="LogInUsername"
              className="Log-Username"
              placeholder="your username"
              required
              ref={this.Login}
            />
          </div>

          <br />
          <br />
          <div className="input-pass">
            <label htmlFor="LogInPassword">
              Password<span className="span-global">* </span>
            </label>
            <input
              type="passWord"
              name="LogInPassword"
              placeholder="Pass@123"
              className="Log-pass"
              required
            />
          </div>
          <br />
          <br />
          <p className="signup">
            Don't have an account yet ?<Link to="/signup"> Sign Up</Link>
          </p>

          <button type="submit" className="login">
            {" "}
            Login
          </button>
          <Link to="/">
            <button className="back">Back</button>
          </Link>
        </form>
      </div>
    );
  }
}

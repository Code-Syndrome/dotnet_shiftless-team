import React, { Component } from "react";
import style from "./staticfile/SignUp.modules.css";
import { Link } from "react-router-dom";
import img from "./staticfile/SignUp.webp";

export default class SignUp extends Component {
  render() {
    return (
      <div style={style.SignUp} className="Main-container">
        <div className="img-container">
          <img src={img} alt="side-logo" />
        </div>
        <form className="form">
          <div className="form-in">
            <label>
              Username<span className="span-global">* </span>{" "}
            </label>
            <input
              type="Username"
              name="SignUpUsername"
              placeholder="your username"
              required
            />
            <br />
            <br />
            <label>
              Password<span className="span-global">* </span>{" "}
            </label>
            <input
              type="passWord"
              name="SignUpPassword"
              placeholder="Pass@123"
              required
            />
            <br />
            <br />
            <label>
              Confirm Password<span className="span-global">* </span>{" "}
            </label>
            <input
              type="passWord"
              name="SignUpConPassword"
              placeholder="Pass@123"
              required
            />
            <br />
            <br />
            <p>
              Already A Registered ? Click Here To
              <Link to="/login"> Login</Link>{" "}
            </p>
            <button className="but1" type="submit">
              Register
            </button>
            <Link to="/">
              <button className="but">Back</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

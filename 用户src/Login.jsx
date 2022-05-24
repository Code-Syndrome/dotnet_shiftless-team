import React, { Component } from "react";
import style from "./staticfile/Login.modules.css";
import { Link } from "react-router-dom";
import img from "./staticfile/Login.gif";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
    };
    this.FormTextGet = this.FormTextGet.bind(this);
    this.LoginUsername = React.createRef();
    this.LoginPassword = React.createRef();
  }

  FormTextGet() {
    fetch(
      `http://localhost:5000/GetUserByUsername/${this.LoginUsername.current.value}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        sessionStorage.setItem("username", data.username.trim());
        sessionStorage.setItem("password", data.password.trim());
        sessionStorage.setItem("permission", data.permission);
        this.setState({ user: data });
      })
      .catch((e) => console.log("错误：", e));
    this.LoginVerify();
  }

  LoginVerify() {
    if (sessionStorage.getItem("username") !== "") {
      if (
        sessionStorage.getItem("username") ===
        this.LoginUsername.current.value.trim()
      ) {
        if (
          sessionStorage.getItem("password") ===
          this.LoginPassword.current.value.trim()
        ) {
          if (sessionStorage.getItem("permission") === 0) {
            alert("欢迎回来，管理员admin");
            window.location.href = "http://localhost:3000/Admin";
          } else {
            alert(`欢迎回来，${sessionStorage.getItem("username")}`);
          }
        } else {
          alert("登录失败！");
          console.log(
            sessionStorage.getItem("password"),
            this.LoginPassword.current.value.trim()
          );
        }
      } else {
        alert("登录失败！");
        console.log(
          sessionStorage.getItem("username"),
          this.LoginUsername.current.value
        );
      }
    } else {
      alert("登录失败！");
      console.log(sessionStorage.getItem("username"));
    }
  }

  StopSumbit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div style={style.Login} className="main-container">
        <div className="img-container">
          <img src={img} alt="gif-log" />
        </div>
        <form className="form" onSubmit={this.StopSumbit}>
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
              ref={this.LoginUsername}
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
              ref={this.LoginPassword}
            />
          </div>
          <br />
          <br />
          <p className="signup">
            Don't have an account yet ?<Link to="/signup"> Sign Up</Link>
          </p>
          <button onClick={this.FormTextGet} type="submit" className="login">
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

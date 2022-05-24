import React, { Component } from "react";
import style from "./staticfile/SignUp.modules.css";
import { Link } from "react-router-dom";
import img from "./staticfile/SignUp.webp";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      signUser: "",
    };
    this.signUsername = React.createRef();
    this.signPassword = React.createRef();
    this.signConfirmPassword = React.createRef();
  }

  AddUser() {
    const UserData = {
      username: this.signUsername.current.value,
      password: this.signPassword.current.value,
      permission: "1",
    };
    fetch(`http://localhost:5000/UserData`, {
      method: "POST",
      body: JSON.stringify(UserData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("填加了" + data + "条用户数据");
      })
      .catch((e) => console.log("错误：", e));
  }

  StopSumbit = (e) => {
    e.preventDefault();
    if (
      this.signPassword.current.value === this.signConfirmPassword.current.value
    ) {
      this.AddUser();
    } else {
      alert("两次密码不相同");
    }
  };

  render() {
    return (
      <div style={style.SignUp} className="Main-container">
        <div className="img-container">
          <img src={img} alt="side-logo" />
        </div>
        <form className="form" onSubmit={this.StopSumbit}>
          <div className="form-in">
            <label>
              Username<span className="span-global">* </span>{" "}
            </label>
            <input
              type="Username"
              name="SignUpUsername"
              placeholder="your username"
              required
              ref={this.signUsername}
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
              ref={this.signPassword}
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
              ref={this.signConfirmPassword}
            />
            <br />
            <br />
            <p>
              Already A Registered ? Click Here To
              <Link to="/login"> Login</Link>{" "}
            </p>
           
            <button className="but1" type="submit" >
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


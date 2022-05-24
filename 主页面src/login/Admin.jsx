import React, { Component } from "react";
import AdminList from "./AdminList";
import img from "./staticfile/admin.gif";
import style from "./staticfile/Admin.modules.css";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      NowClick: "",
    };
  }

  render() {
    return (
      <div style={style.Admin} className="maindiv">
        <img src={img} alt="admin.gif" className="img" />
        <div className="buttondiv">
          <button
            className="AddUser"
            onClick={() => this.setState({ NowClick: "AddUser" })}>
            AddUser
          </button>
          <button
            className="DeleteUserByUserName"
            onClick={() => this.setState({ NowClick: "DeleteUserByUserName" })}>
            DeleteUserByUserName
          </button>
          <button
            className="UpdateUser"
            onClick={() => this.setState({ NowClick: "UpdateUser" })}>
            UpdateUser
          </button>
          <button
            className="GetUserByUserName"
            onClick={() => this.setState({ NowClick: "GetUserByUserName" })}>
            GetUserByUserName
          </button>
          <button
            className="GetAllUser"
            onClick={() => this.setState({ NowClick: "GetAllUser" })}>
            GetAllUser
          </button>
        </div>
        <div className="buttondiv">
          <button
            className="AddNews"
            onClick={() => this.setState({ NowClick: "AddNews" })}>
            AddNews
          </button>
          <button
            className="DeleteNewsById"
            onClick={() => this.setState({ NowClick: "DeleteNewsById" })}>
            DeleteNewsById
          </button>
          <button
            className="UpdateNews"
            onClick={() => this.setState({ NowClick: "UpdateNews" })}>
            UpdateNews
          </button>
          <button
            className="GetNewsById"
            onClick={() => this.setState({ NowClick: "GetNewsById" })}>
            GetNewsById
          </button>
          <button
            className="GetAllNews"
            onClick={() => this.setState({ NowClick: "GetAllNews" })}>
            GetAllNews
          </button>
          <div className="buttondiv">
          <a href = "http://localhost:3000">
            <button>返回首页</button>
            </a>
          </div>
        </div>
        <AdminList data={this.state.NowClick} />
      </div>
    );
  }
}

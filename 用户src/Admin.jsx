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
    sessionStorage.setItem("NowClick", this.state.NowClick);
    console.log(sessionStorage.getItem("NowClick"));
    return (
      <div style={style.Admin} className="maindiv">
        <img src={img} alt="admin.gif" className="img" />
        <div className="buttondiv">
          <button
            className="AddUser"
            onClick={() => {
              this.setState({ NowClick: "AddUser" });
              sessionStorage.setItem("ChangeCompent", "UserV");
            }}>
            AddUser
          </button>
          <button
            className="DeleteUserByUserName"
            onClick={() => {
              this.setState({ NowClick: "DeleteUser" });
              sessionStorage.setItem("ChangeCompent", "UserV");
            }}>
            DeleteUserByUserName
          </button>
          <button
            className="UpdateUser"
            onClick={() => {
              this.setState({ NowClick: "UpdateUser" });
              sessionStorage.setItem("ChangeCompent", "UserV");
            }}>
            UpdateUser
          </button>
          <button
            className="GetUserByUserName"
            onClick={() => {
              this.setState({ NowClick: "GetUserByUserName" });
              sessionStorage.setItem("ChangeCompent", "UserV");
            }}>
            GetUserByUserName
          </button>
          <button
            className="GetUser"
            onClick={() => {
              this.setState({ NowClick: "GetUser" });
              sessionStorage.setItem("ChangeCompent", "UserV");
            }}>
            GetUser
          </button>                                                                       
          <button
            className="AddNews"
            onClick={() => {
              this.setState({ NowClick: "AddNews" });
              sessionStorage.setItem("ChangeCompent", "NewsV");
            }}>
            AddNews
          </button>
          <button
            className="DeleteNewsById"
            onClick={() => {
              this.setState({ NowClick: "DeleteNews" });
              sessionStorage.setItem("ChangeCompent", "NewsV");
            }}>
            DeleteNewsById
          </button>
          <button
            className="UpdateNews"
            onClick={() => {
              this.setState({ NowClick: "UpdateNewsNews" });
              sessionStorage.setItem("ChangeCompent", "NewsV");
            }}>
            UpdateNews
          </button>
          <button
            className="GetNewsById"
            onClick={() => {
              this.setState({ NowClick: "GetNewsById" });
              sessionStorage.setItem("ChangeCompent", "NewsV");
            }}>
            GetNewsById
          </button>
          <button
            className="GetNews"
            onClick={() => {
              this.setState({ NowClick: "GetNews" });
              sessionStorage.setItem("ChangeCompent", "NewsV");
            }}>
            GetNews
          </button>
        </div>
        <AdminList
          change={sessionStorage.getItem("ChangeCompent")}
          data={sessionStorage.getItem("NowClick")}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import style from "./staticfile/UserIndex.modules.css";
import { Link } from "react-router-dom";
import img from "./staticfile/UserIndexImg.gif";

export default class UserIndex extends Component {
    render() {
        return (
            <div style={style.UserIndex} className="main-container">
                <h1 className="heading">Welcome Home</h1>
                <img src={img} alt="gif" className="img" />
                <div className="button">
                    <Link to="/signup">
                        {" "}
                        <button className="but-st">SignUp </button>
                    </Link>
                    <Link to="/login">
                        <button className="but-st">LogIn</button>
                    </Link>
                    /         </div>
            </div>
        );
    }
}

import React, { Component } from 'react'

export default class ShowSearch extends Component {
    constructor() {
        super();
        this.nowvalarr = JSON.parse(sessionStorage.getItem("nowval"));
        console.log(this.nowvalarr);
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

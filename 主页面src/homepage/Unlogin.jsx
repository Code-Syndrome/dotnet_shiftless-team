import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Unlogin extends Component {
    render() {
        return (
            <div>
                未登录，请先登录
                <Link to='/login'>GO LOGIN</Link>
            </div>
        )
    }
}

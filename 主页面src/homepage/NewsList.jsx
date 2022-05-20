import posts from './details/newsContent'
import { Link } from 'react-router-dom'

import React, { Component } from 'react'

export default class NewsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        posts.map((val, index) => (
                            <li key={index}>
                                <Link to={`/detail/${index}`}>{val.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}



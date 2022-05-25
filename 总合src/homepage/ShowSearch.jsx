import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import style from './Home.modules.css'

export default class ShowSearch extends Component {
    constructor() {
        super();
        this.nowvalarr = JSON.parse(sessionStorage.getItem("nowval"));
        console.log(this.nowvalarr);
    }

    render() {
        return (
            <div>
                <fieldset style={style.ShowSearch} className='ListPage'>
                    <div style={style.ShowSearch} className='Nav'>
                        <ul>
                            <li>
                                <Link to='/flash'>热点</Link>
                            </li>

                            <li>
                                <Link to='/entertainment'>娱乐</Link>
                            </li>

                            <li>
                                <Link to='/technology'>科技</Link>
                            </li>

                            <li>
                                <Link to='/game'>游戏</Link>
                            </li>
                        </ul>
                    </div>
                    <div style={style.home} className='showsearch'>
                        <ul>
                            {
                                this.nowvalarr.map((val) => (
                                    <li>
                                        <Link to={`/detail/${val}`}>{val.title}</Link>
                                        <hr />
                                    </li>))
                            }
                        </ul>
                    </div>
                </fieldset>
                <a href="http://localhost:3000"><button style={style.Home} className='gohome'>返回首页</button></a>
            </div>
        )
    }
}

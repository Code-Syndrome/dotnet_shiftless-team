import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './homepage/Home';
import Technology from './homepage/Technology'
import Game from './homepage/Game'
import Entertainment from './homepage/Entertainment'
import Flash from './homepage/Flash'
import Detail from './homepage/details/Detail'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/flash' element={<Flash />} />
          <Route path='/entertainment' element={<Entertainment />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/game' element={<Game />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route index element={<Home />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

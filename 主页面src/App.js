import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Technology from './home/Technology'
import Game from './home/Game'
import Entertainment from './home/Entertainment'
import Flash from './home/Flash'
import Detail from './home/details/Detail'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Routes>
          <Route path='/Flash' element={<Flash />} />
          <Route path='/Entertainment' element={<Entertainment />} />
          <Route path='/Technology' element={<Technology />} />
          <Route path='/Game' element={<Game />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route index element={<Home />} />
        </Routes>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Home from './Home'
import About from './About'
import Marae from './Marae'
import Paikea from './Paikea'

const routes = (
  <Route path="/" component = { Home }>
    <Route path="/about" component = { About } />
    <Route path="/marae" component = { Marae } />
    <Route path="/te-ara-o-paikea" component = { Paikea } />
  </Route>
)

export default routes


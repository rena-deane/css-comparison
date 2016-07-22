import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Home from './Home'
import About from './About'
import Marae from './Marae'
import Paikea from './Paikea'

export default class Routes extends Component {
  render (){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="about" component={About} />
          <Route path="marae" component={Marae} />
          <Route path="te-ara-o-paikea" component={Paikea} />
        </Route>
      </Router>
    )
  }
}


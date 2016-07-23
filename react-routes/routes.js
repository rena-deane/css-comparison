import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import About from '../components/About'
import Marae from '../components/Marae'
import Paikea from '../components/Paikea'

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


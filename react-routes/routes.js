import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import Education from '../components/Education'
import Marae from '../components/Marae'
import Church from '../components/Church'

export default class Routes extends Component {
  render (){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="education" component={Education} />
          <Route path="marae" component={Marae} />
          <Route path="church" component={Church} />
        </Route>
      </Router>
    )
  }
}


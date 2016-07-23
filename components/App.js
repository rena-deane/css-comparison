import React, { Component } from 'react'
import Header from './Header'
import Nav from './Navigation'

export default class App extends Component {
  render () {
    return (
      <div id='app'>

        <div id='header-wrapper'>

          <Header />

          <div id='nav-wrapper'>
            <Nav />
          </div>

        </div>

        <div id='content-container'>
          {this.props.children}
        </div>

      </div>
    )
  }

}
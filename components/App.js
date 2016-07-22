import React, { Component } from 'react'
import Nav from './Navigation'
import Routes from './routes'

class App extends Component {
  render () {
    return (
      <div id='app-wrapper'>
        <div id='main'>{ Routes }</div>
      </div>
    )
  }

}

export default App
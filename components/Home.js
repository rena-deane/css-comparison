import React, { Component } from 'react'
import Weather from './Weather'

export default class Home extends Component {
  render (){
    return (
      <div id="about-container">

        <div className="about-item one">
          <p id="home-intro"><strong>Rangitukia</strong> is a small settlement 10 kilometres south of East Cape in the northeast of New Zealand&#39;s North Island. It is located close to the mouth of the Waiapu River.</p>
        </div>

        <div className="about-item two">
          <h2>Item One</h2>
        </div>

      </div>
    )
  }
}
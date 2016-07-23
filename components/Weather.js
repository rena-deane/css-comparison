import React, { Component } from 'react'

export default class Home extends Component {
  render (){
    return (
        <div className="about-item weather">

          <div className="current-condition weather-icon">
            <img src='../../images/weather/00-sun-cloud.svg' alt='few clouds hanging around' className='icon'/>
          </div>

          <div className="current-condition temp">
            <h4 className='temp-title'>Low:</h4>
            <h3>8</h3>
            <img src='../../images/weather/00-celcius.svg' alt='few clouds hanging around' className='temp-icon'/>
          </div>

          <div className="current-condition temp">
            <h4 className='temp-title'>High:</h4>
            <h3>13</h3>
            <img src='../../images/weather/00-celcius.svg' alt='few clouds hanging around' className='temp-icon'/>
          </div>

        </div>
    )
  }
}
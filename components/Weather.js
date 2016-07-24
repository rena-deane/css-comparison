import React, { Component } from 'react'

export default class Home extends Component {
  render (){
    return (
        <div className="about-item weather">

          <div className="current-condition date">
            <p id='long-date'>Monday 24 July 2016</p>
            <p id='short-date'>24 July 2016</p>
          </div>

          <div className="current-condition weather-icon">
            <img src='../../images/weather/00-sun-cloud.svg' alt='few clouds hanging around' className='icon'/>
          </div>

          <div className="current-condition temp">
            <h6 className='temp-title'>Low:</h6>
            <h5>8</h5>
            <img src='../../images/weather/00-celcius.svg' alt='few clouds hanging around' className='temp-icon'/>
          </div>

          <div className="current-condition temp">
            <h6 className='temp-title'>High:</h6>
            <h5>13</h5>
            <img src='../../images/weather/00-celcius.svg' alt='few clouds hanging around' className='temp-icon'/>
          </div>

        </div>
    )
  }
}
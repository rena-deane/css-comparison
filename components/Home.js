import React, { Component } from 'react'

export default class Home extends Component {
  render (){
    return (
      <div id="home-container">

        <div className="home-item one">
          <p id="home-intro"><strong>Rangitukia</strong> is a small settlement 10 kilometres south of East Cape in the northeast of New Zealand&#39;s North Island. It is located close to the mouth of the Waiapu River.</p>

          <p>Tikitiki and Rangitukia are communities within the northern part of the Gisborne district. Historically these settlements had a thriving dairy industry, a range of shops, a racecourse and four rugby teams. In the 1950s and 60s the area had a population of 6,000. An economic downturn in the rural areas of the district in the mid to late 60s contributed to a large number of people migrating to the cities (urban drift).
          </p>

          <p>Today’s population of 528 is largely made up of those aged 35 and over. Most of these people are homemakers or employed in industries such as roading, forestry, farming, food and beverage and office work. Ninety five percent of residents identify as being Māori.</p>
        </div>

        <div className="home-item two">
          <img src='../images/rangitukia-waiapu.jpg' alt='Rangitukia facing Pohautea' />
        </div>

      </div>
    )
  }
}
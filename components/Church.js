import React, { Component } from 'react'

export default class Church extends Component {
  render (){
    return (
      <div id='church-container'>
        <h2>Waiapu Pariha</h2>

        <div className='church-item'>
          <img src='../images/st-johns-church.jpg' alt='Rangitukia church' />
        </div>

        <div className='church-item'>
          <p>
          St John&#39;s Church has architectural significance as an unaltered early twentieth century timber church.  The church was erected in 1927 on the site of the first church associated with the Rangitukia Mission Station and St John&#39;s Theological College.  This was the centre of the Waiapu pastoral area and where most of the area&#39;s early Maori clergy were ordained.
          </p>

          <p>
            The church had fallen into a state of disrepair and we were initially engaged to prepare a Condition Report for the church.  Following this, plans and specifications were prepared for the restoration of the church including the removal a timber props which had been installed following the Wahine Storm, which almost flattened the building.
          </p>
        </div>

      </div>
    )
  }
}
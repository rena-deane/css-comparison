import React, { Component } from 'react'

export default class Education extends Component {
  render (){
    return (
      <div id="education-container">
        <div className="education-item">
          <h2>Te Kura Kaupapa Maori o Tapere-Nui-A-Whatonga</h2>
        </div>

        <div className="education-item">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KHzMt7mJGo8" allowfullscreen></iframe>
        </div>

        <div className="education-item">
          <p>E tū ana Te Kura Kaupapa Māori o Tāpere-Nui-a-Whatonga ki Rangitukia. Ko te reo me ngā tikanga o Ngāti Porou e pou here ana i te katoa o ngā whakaakoranga me ngā akoranga ki te kura. He pakari ngā ākonga i roto i tō rātou mōhiotanga ki te mau tūhonohono o te here o ō rātou ihomatua ki ō rātou mātua tūpuna, piki ake i ngā Rangi Tūhāhā ki te marae ātea o Io-Matua. Ka mahi tahi te poari me te tumuaki ki te whakamahere me te whakatinana i ngā pūnaha kāwanatanga, pūnaha whakahaere hoki e whai hua ana.</p>
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Marae extends Component {
  render (){
    return (
      <div id='marae-container'>
        <h2>Marae</h2>
        <div className='sub-nav'>
          <ul className='page-nav'>
            <li><a href='#hinepare'>Hinepare</a></li>
            <li><a href='#ohinewaiapu'>Ohinewaiapu</a></li>
          </ul>
        </div>

        <div className='marae-item'>
          <a name='hinepare'><h3>Hinepare</h3></a>

          <img src='../images/hinepare.jpg' alt='' />

          <div className='pepeha'>
            <p>
              Ko Papaka te maunga.
            </p>

            <p>
              Ko Maraehara te awa.
            </p>

            <p>
              Ko Te Whānau a Hinepare te hapū.
            </p>
          </div>

          <p>
            Ko Tairāwhiti te whare nui. He whare kua tapaina ki te takiwa nei o te Tairāwhiti, ara, Te Uranga o Te Ra. Ko Mataura te koruru o Tairāwhiti, ara te tane a Hinepare. Ko ngā kōwhaiwhai, me ngā whakaahua o roto nā ngā tauira o Te Kuratini o Te Tairāwhiti i te tau, 1988 i hanga.
          </p>

          <p>
            Ko Hinepare te whare kai. I whakatūwhera tēnei whare i te 17 o Maehe, 1945. Ko tōna koruru e whata ana ki runga ake i te atamira kei roto i te hōro. Ko nga hui katoa ka taea ki konei. Na Pine Taiapa ngā tukutuku kei roto i te poho o Hinepare.
          </p>

        </div>

        <div className='marae-item'>
          <a name='ohinewaiapu'><h3>Ohinewaiapu</h3></a>

          <img src='../images/ohinewaiapu.jpg' alt='' />

          <div className='pepeha'>
            <p>
              Ko Puketapu, ko Tāngakākariki, ko Kamiti ngā maunga.
            </p>

            <p>
              Ko Waikākā te awa.
            </p>

            <p>
              Ko Ngāti Hokopū, ko Ngāti Nua, ko Te Whānau a Hunaara, ko Te Whānau a Rerewa, ko Te Whānau a Takimoana ngā hapū.
            </p>
          </div>

          <p>
            Ko Ohinewaiapu te whare tipuna. Kei roto nei, ko ngā whakaahua o ngā tīpuna, otirā, rātau katoa kua mine atu ki te pō, e iri nei ki ngā pakitara o te whare. Ka noho te tūpāpaku ki waho i te whare, ki te parani.
          </p>

          <p>
            Ko Te Ohaki te whare kai. Nā Korowi Green mā i whakamārama atu ngā tini pūrākau, kōrero whakapapa o te takiwā nei ki te tohunga ringa toi a Derek Lardelli me āna tauira Toihoukura. Nā rātau te whare nei i whakairo, i kōwhaiwhai,i whakapai ataahua. Ko Te Ohaki, kia mahara tātau ki o tātau kawai, hononga, piringa hoki ki tēnei marae, whenua.
          </p>

        </div>

      </div>
    )
  }
}
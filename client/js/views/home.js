import {h} from 'hyperapp'
import hyperx from 'hyperx'

import NavBar from '../components/navbar'

const html = hyperx(h)

const Info = (state, actions) => {
  return html`<div>
  ${NavBar(state, actions)}
  <div class="columns is-mobile is-centered">
    <div class="column is-half">
      <section class="section">
        <h1 class="title is-1">When It Counts</h1>
        <hr>
        <h2 class="subtitle is-4">Description</h2>
        <p class="content">
          <p>A game about the hero’s life after the quest. You saved the world, and now you’re back home, but your sacrifices are catching up with you. Speak with whoever matters to you most.</p>
          <p>Arrow keys or A/D to move. Space/Enter to interact or skip.</p>
          <p>There is no secret ending. Choose your own objective.</p>
          <p>Made with Phaser + ES6 + Webpack.</p>
        </div>
        <hr>
        <h2 class="subtitle is-4">Authors</h2>
        <div class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">http404error</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Dplusminus</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Mamamacsparkles</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">PureGarlic</p>
            </div>
          </div>
        </div>
        <hr>
      </section>
    </div>
  </div>
</div>`
}

export default Info
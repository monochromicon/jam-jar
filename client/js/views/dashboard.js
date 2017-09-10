import {h} from 'hyperapp'
import hyperx from 'hyperx'

import NavBar from '../components/navbar'
import Stats from '../components/stats'
import Metrics from '../components/metrics'

const html = hyperx(h)

const Dashboard = (state, actions) => {
  return html`<div>
  ${NavBar(state, actions)}
  <br>
  <div class="columns is-centered">
    <div class="column is-7">
      <div class="tile is-ancestor is-vertical">
        ${Stats(state.stats)}
        <div class="tile is-parent is-vertical">
          ${Metrics(state.metrics)}
          <div class="tile is-child box">
            <h4 class="title is-4">Description</h4>
            <p class="content">
              <p>A game about the hero’s life after the quest. You saved the world, and now you’re back home, but your sacrifices are catching up with you. Speak with whoever matters to you most.</p>
              <p>Arrow keys or A/D to move. Space/Enter to interact or skip.</p>
              <p>There is no secret ending. Choose your own objective.</p>
              <p>Made with Phaser + ES6 + Webpack.</p>
            </p>
            <hr>
            <h5 class="title is-4">Links</h5>
              <h6 class="heading">Source code</h6>
              <a href="https://github.com/monochromicon/ludum-dare39">https://github.com/monochromicon/ludum-dare39</a>
              <br>
              <br>
              <h6 class="heading">HTML5 (web)</h6>
              <a href="https://monochromicon.github.io/ludum-dare39/">https://monochromicon.github.io/ludum-dare39/</a>
          </div>
          <div class="tile is-child box">
            <h4 class="title is-4">Authors</h4>
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
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</div>`
}

export default Dashboard
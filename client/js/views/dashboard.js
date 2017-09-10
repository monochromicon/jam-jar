import {h} from 'hyperapp'
import hyperx from 'hyperx'

import NavBar from '../components/navbar'
import Stats from '../components/stats'
import Metrics from '../components/metrics'
import Details from '../components/details'

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
          ${Details(state.description, state.links)}
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
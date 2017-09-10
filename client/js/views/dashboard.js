import {h} from 'hyperapp'
import hyperx from 'hyperx'

import NavBar from '../components/navbar'
import Stats from '../components/stats'
import Metrics from '../components/metrics'
import Details from '../components/details'
import Authors from '../components/authors'

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
          ${Authors(state.authors)}
        </div>
        <hr>
      </div>
    </div>
  </div>
</div>`
}

export default Dashboard
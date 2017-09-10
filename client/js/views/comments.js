import {h} from 'hyperapp'
import hyperx from 'hyperx'

import NavBar from '../components/navbar'
import Comment from '../components/comment'

const html = hyperx(h)


const Comments = (state, actions) => {
  return html`<div>
  ${NavBar(state, actions)}
  <br>
  <div class="columns is-centered">
    <div class="column is-6">
      <div class="tile is-ancestor is-vertical">
        ${state.comments.map(c => {
          return Comment(c.name, c.text, c.info)
        })}
      </div>
    </div>
  </div>
</div>`
}

export default Comments
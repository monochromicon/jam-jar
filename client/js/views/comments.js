import {h} from 'hyperapp'
import hyperx from 'hyperx'

import NavBar from '../components/navbar'

const html = hyperx(h)

const Comments = (state, actions) => {
  return html`<div>
  ${NavBar(state, actions)}
  <br>
  <div class="columns is-centered">
    <div class="column is-6">
      <div class="tile is-ancestor is-vertical">
        <div class="tile is-parent box">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="http://bulma.io/images/placeholders/128x128.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <div class="tags has-addons">
                      <div class="tag">Likes</div>
                      <div class="tag is-danger">3</div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>`
}

export default Comments
import {h} from 'hyperapp'
import hyperx from 'hyperx'
import {Link} from '@hyperapp/router'

const html = hyperx(h)

const Comment = (name, text, info) => {
  return html`<div class="tile is-parent box">
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="${info.photo}">
      </p>
      </figure>
      <div class="media-content">
      <div class="content">
      <p>
      <strong>${name}</strong> <small><a href="https://ldjam.com/users/${info.handle.slice(1)}">${info.handle}</a></small> <small class="has-text-grey-light">${info.time}</small>
      <br>
      ${text}
      </p>
      <nav class="level is-mobile">
        <div class="level-left"></div>
        <div class="level-right">
          <div class="level-item">
            <div class="tags has-addons">
              <div class="tag is-small is-danger">❤️</div>
              <div class="tag is-small">${info.likes}</div>
            </div>
          </div>
        </div>
      </nav>
      </div>
    </div>
  </article>
</div>`
}

export default Comment

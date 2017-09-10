import {h} from 'hyperapp'
import hyperx from 'hyperx'

const html = hyperx(h)

const Authors = authors => {
  return html`<div class="tile is-child box">
  <h4 class="title is-4">Authors</h4>
  <div class="level">
    ${authors.map(a => {
      return html`<div class="level-item has-text-centered">
  <div>
    <a class="heading" href="https://ldjam.com/users/${a.replace(/ /, '-' ).toLowerCase()}">${a}</p>
  </div>
</div>`
    })}
  </div>
</div>`
}

export default Authors

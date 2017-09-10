import {h} from 'hyperapp'
import hyperx from 'hyperx'

const html = hyperx(h)

const Description = text => {
  return html`<div>
  <h5 class="title is-4">Description</h5>
  <p class="content">
    ${text.map(t => html`<p>${t}</p>`)}
  </p>
</div>`
}

const Links = links => {
  const res = []
  links.forEach((val, key) => {
    res.push(html`<div>
  <h6 class="heading">${key}</h6>
  <a href="${val}">${val}</a>${res.length === links.size - 1 ? `` : html`<div><br></div>`}
</div>`)
  })
  return html`<div>
  <h5 class="title is-4">Links</h5>
  ${res.map(l => l)}
</div>`
}

const Details = (text, links) => {
  return html`<div class="tile is-child box">
    ${Description(text)}
    <hr>
    ${Links(links)}
  </div>`

}

export default Details
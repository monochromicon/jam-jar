import {h} from 'hyperapp'
import hyperx from 'hyperx'
import {Link} from '@hyperapp/router'

const html = hyperx(h)

const Metrics = metrics => {
  return html`<div class="tile is-child box">
  <h4 class="title is-4">Metrics</h4>
  <div class="field is-grouped is-grouped-multiline">
    <div class="control">
      <div class="tags has-addons">
        <span class="tag is-medium is-dark">Feedback Karma</span>
        <span class="tag is-medium is-primary">${metrics.karma}</span>
      </div>
    </div>
    
    <div class="control">
      <div class="tags has-addons">
        <span class="tag is-medium is-dark">Ratings Given</span>
        <span class="tag is-medium is-primary">${metrics.given}</span>
      </div>
    </div>
    
    <div class="control">
      <div class="tags has-addons">
        <span class="tag is-medium is-dark">Ratings Received</span>
        <span class="tag is-medium ${metrics.qualified != null ? (metrics.qualified ? 'is-success' : 'is-danger') : 'is-warning'}">${metrics.received}</span>
      </div>
    </div>
    
    <div class="control">
      <div class="tags has-addons">
        <span class="tag is-medium is-dark">Classic Balance*</span>
        <span class="tag is-medium is-warning">${metrics.classic}</span>
      </div>
    </div>
    
    <div class="control">
      <div class="tags has-addons">
        <span class="tag is-medium is-dark">Smart Balance*</span>
        <span class="tag is-medium is-warning">${metrics.smart}</span>
      </div>
    </div>
  </div>
  <hr>
  <div class="content is-size-7">
    <p>These numbers update every 15 minutes, so don't worry if they don't match your ratings.</p>
    <p>Values with a * are dynamic, and change based on a variety of factors.</p>
    <p>After voting has closed, Ratings Recieved will change to <span class="has-text-success">Green</span> if you have enough votes to be ranked, or <span class="has-text-danger">Red</span> if you do not.</p>
  </div>
</div>`
}

export default Metrics
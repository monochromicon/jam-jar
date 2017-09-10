import {h} from 'hyperapp'
import hyperx from 'hyperx'
import {Link} from '@hyperapp/router'

const html = hyperx(h)

const Stats = stats => {
  return html`<div>
  <div class="tile is-parent box notification is-primary has-text-centered">
    <div class="tile is-child">
      <h1 class="heading is-4">Overall</h1>
      <h2 class="title is-1">${stats.overall.place ? stats.overall.place : 'TBD'}</h2>
      <div class="level">
        <div class="level-item">
          <div class="field is-grouped is-grouped-multiline">
            <div class="control">
              <div class="tags has-addons">
                <div class="tag is-white">Avg</div>
                <div class="tag is-info">${stats.overall.average}</div>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <div class="tag is-white">Votes</div>
                <div class="tag is-info">${stats.overall.votes}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="tile">
    <div class="tile is-parent">
      <div class="tile is-child box notification has-text-centered">
        <h1 class="heading">Fun</h1>
        <h2 class="title is-2">${stats.fun.place ? stats.fun.place : 'TBD'}</h2>
        <div class="level">
          <div class="level-item">
            <div class="field is-grouped is-grouped-multiline">
              <div class="control">
                <div class="tags has-addons">
                  <div class="tag is-white">Avg</div>
                  <div class="tag is-info">${stats.fun.average}</div>
                </div>
              </div>
              <div class="control">
                <div class="tags has-addons">
                  <div class="tag is-white">Votes</div>
                  <div class="tag is-info">${stats.fun.votes}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child box notification has-text-centered">
        <h1 class="heading">Theme</h1>
        <h2 class="title is-2">${stats.theme.place ? stats.theme.place : 'TBD'}</h2>
        <div class="level">
          <div class="level-item">
            <div class="field is-grouped is-grouped-multiline">
              <div class="control">
                <div class="tags has-addons">
                  <div class="tag is-white">Avg</div>
                  <div class="tag is-info">${stats.theme.average}</div>
                </div>
              </div>
              <div class="control">
                <div class="tags has-addons">
                  <div class="tag is-white">Votes</div>
                  <div class="tag is-info">${stats.theme.votes}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child box notification has-text-centered">
        <h1 class="heading">Mood</h1>
        <h2 class="title is-2">${stats.mood.place ? stats.mood.place : 'TBD'}</h2>
        <div class="level">
          <div class="level-item">
            <div class="field is-grouped is-grouped-multiline">
              <div class="control">
                <div class="tags has-addons">
                  <div class="tag is-white">Avg</div>
                  <div class="tag is-info">${stats.mood.average}</div>
                </div>
              </div>
              <div class="control">
                <div class="tags has-addons">
                  <div class="tag is-white">Votes</div>
                  <div class="tag is-info">${stats.mood.votes}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="tile">
    <div class="tile is-parent">
      <div class="tile is-child box notification has-text-centered">
        <h1 class="heading">Graphics</h1>
        <h2 class="title is-2">${stats.graphics.place ? stats.graphics.place : 'TBD'}</h2>
        <div class="level">
          <div class="level-item">
            <div class="field is-grouped is-grouped-multiline">
              <div class="control">
                <div class="tags has-addons">
                  <div class="tag is-white">Avg</div>
                  <div class="tag is-info">${stats.graphics.average}</div>
                </div>
              </div>
              <div class="control">
                <div class="tags has-addons">
                  <div class="tag is-white">Votes</div>
                  <div class="tag is-info">${stats.graphics.votes}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child box notification has-text-centered">
        <h1 class="heading">Innovation</h1>
        <h2 class="title is-2">${stats.innovation.place ? stats.innovation.place : 'TBD'}</h2>
        <div class="level">
          <div class="level-item">
            <div class="field is-grouped is-grouped-multiline">
              <div class="control">
                <div class="tags has-addons">
                  <div class="tag is-white">Avg</div>
                  <div class="tag is-info">${stats.innovation.average}</div>
                </div>
              </div>
              <div class="control">
                <div class="tags has-addons">
                  <div class="tag is-white">Votes</div>
                  <div class="tag is-info">${stats.innovation.votes}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
}

export default Stats
import {h} from 'hyperapp'
import hyperx from 'hyperx'

import NavBar from '../components/navbar'

const html = hyperx(h)

const Dashboard = (state, actions) => {
  return html`<div>
  ${NavBar(state, actions)}
  <br>
  <div class="columns is-centered">
    <div class="column is-7">
      <div class="tile is-ancestor is-vertical">
        <div class="tile is-parent box notification is-primary has-text-centered">
          <div class="tile is-child">
            <h1 class="heading is-4">Overall</h1>
            <h2 class="title is-1">489th</h2>
            <div class="level">
              <div class="level-item">
                <div class="field is-grouped is-grouped-multiline">
                  <div class="control">
                    <div class="tags has-addons">
                      <div class="tag is-white">Avg</div>
                      <div class="tag is-info">3.263</div>
                    </div>
                  </div>
                  <div class="control">
                    <div class="tags has-addons">
                      <div class="tag is-white">Votes</div>
                      <div class="tag is-info">21</div>
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
              <h2 class="title is-2">683rd</h2>
              <div class="level">
                <div class="level-item">
                  <div class="field is-grouped is-grouped-multiline">
                    <div class="control">
                      <div class="tags has-addons">
                        <div class="tag is-white">Avg</div>
                        <div class="tag is-info">2.737</div>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <div class="tag is-white">Votes</div>
                        <div class="tag is-info">21</div>
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
              <h2 class="title is-2">388th</h2>
              <div class="level">
                <div class="level-item">
                  <div class="field is-grouped is-grouped-multiline">
                    <div class="control">
                      <div class="tags has-addons">
                        <div class="tag is-white">Avg</div>
                        <div class="tag is-info">3.526</div>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <div class="tag is-white">Votes</div>
                        <div class="tag is-info">21</div>
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
              <h2 class="title is-2">284th</h2>
              <div class="level">
                <div class="level-item">
                  <div class="field is-grouped is-grouped-multiline">
                    <div class="control">
                      <div class="tags has-addons">
                        <div class="tag is-white">Avg</div>
                        <div class="tag is-info">3.474</div>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <div class="tag is-white">Votes</div>
                        <div class="tag is-info">21</div>
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
              <h2 class="title is-2">469th</h2>
              <div class="level">
                <div class="level-item">
                  <div class="field is-grouped is-grouped-multiline">
                    <div class="control">
                      <div class="tags has-addons">
                        <div class="tag is-white">Avg</div>
                        <div class="tag is-info">3.389</div>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <div class="tag is-white">Votes</div>
                        <div class="tag is-info">20</div>
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
              <h2 class="title is-2">280th</h2>
              <div class="level">
                <div class="level-item">
                  <div class="field is-grouped is-grouped-multiline">
                    <div class="control">
                      <div class="tags has-addons">
                        <div class="tag is-white">Avg</div>
                        <div class="tag is-info">3.316</div>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <div class="tag is-white">Votes</div>
                        <div class="tag is-info">21</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="section tile is-parent is-vertical">
          <div class="tile is-child box">
            <h4 class="title is-4">Metrics</h4>
            <div class="field is-grouped is-grouped-multiline">
              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-medium is-dark">Feedback Karma</span>
                  <span class="tag is-medium is-primary">3</span>
                </div>
              </div>
              
              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-medium is-dark">Ratings Given</span>
                  <span class="tag is-medium is-primary">15.75</span>
                </div>
              </div>
              
              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-medium is-dark">Ratings Received</span>
                  <span class="tag is-medium is-success">20.8333</span>
                </div>
              </div>
              
              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-medium is-dark">Classic Balance*</span>
                  <span class="tag is-medium is-warning">103.7749</span>
                </div>
              </div>
              
              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-medium is-dark">Smart Balance*</span>
                  <span class="tag is-medium is-warning">-9.0055</span>
                </div>
              </div>
            </div>
            <hr>
            <div class="content is-size-7">
              <p>These numbers update every 15 minutes, so don't worry if they don't match your ratings.</p>
              <p>Values with a * are dynamic, and change based on a variety of factors.</p>
              <p>Ratings Recieved will change to <span class="has-text-success">Green</span> if you have enough votes to be ranked, or <span class="has-text-danger">Red</span> if you do not.</p>
            </div>
          </div>
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
          <hr>
        </section>
      </div>
    </div>
  </div>
</div>`
}

export default Dashboard
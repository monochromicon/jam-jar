import {h} from 'hyperapp'
import hyperx from 'hyperx'
import {Link} from '@hyperapp/router'

const html = hyperx(h)


const NavBar = (state, actions) => {
  const linkOps = {
    dashboard: {to: '/', go: actions.router.go, class: 'navbar-item'},
    comments: {to: '/comments', go: actions.router.go, class: 'navbar-item'}
  }

  return html`<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <div class="navbar-item is-uppercase">
      <a href="${state.ldjam}"><strong>${state.title}</strong></a>
    </div>

    <div class="navbar-burger" data-target="navMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenu" class="navbar-menu">
    <div class="navbar-end">
    <div class="navbar-item">
      <div class="field is-grouped is-grouped-multiline">
        <div class="control">
          <div class="tags has-addons">
            <div class="tag">Event #</div>
            <div class="tag is-warning">LD${state.eventNum}</div>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <div class="tag">Theme</div>
            <div class="tag is-warning">${state.theme}</div>
          </div>
        </div>
      </div>
    </div>
    ${Link(linkOps.dashboard, 'Dashboard')}
    ${Link(linkOps.comments, 'Comments')}
    </div>
  </div>
</nav>`
}

export default NavBar
import {h} from 'hyperapp'
import hyperx from 'hyperx'
import {Link} from '@hyperapp/router'

const html = hyperx(h)


const NavBar = (state, actions) => {
  const linkOps = {
    home: {to: '/', go: actions.router.go, class: 'navbar-item'},
    info: {to: '/info', go: actions.router.go, class: 'navbar-item'},
    stats: {to: '/stats', go: actions.router.go, class: 'navbar-item'},
    comments: {to: '/comments', go: actions.router.go, class: 'navbar-item'}
  }

  return html`<nav class="navbar">
  <div class="navbar-brand">
    <h1 class="navbar-item">jam-jar</h1>

    <div class="navbar-burger" data-target="navMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenu" class="navbar-menu">
    <div class="navbar-end">
      ${Link(linkOps.home, 'Home')}
      ${Link(linkOps.info, 'Info')}
      ${Link(linkOps.stats, 'Stats')}
      ${Link(linkOps.comments, 'Comments')}
    </div>
  </div>
</nav>`
}

export default NavBar
import '../sass/vars.sass'

import {h, app} from 'hyperapp'
import hyperx from 'hyperx'
import {router} from '@hyperapp/router'

import state from './state'

import Home from './views/home'
import Info from './views/info'
import Stats from './views/stats'
import Comments from './views/comments'

const html = hyperx(h)

app({
  state,
  mixins: [router()],
  view: [
    ['/', Home],
    ['/info', Info],
    ['/stats', Stats],
    ['/comments', Comments]
  ]
})
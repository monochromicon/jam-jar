import '../sass/vars.sass'

import {h, app} from 'hyperapp'
import hyperx from 'hyperx'
import {router} from '@hyperapp/router'

import state from './state'

import Dashboard from './views/dashboard'
import Comments from './views/comments'

const html = hyperx(h)

app({
  state,
  mixins: [router()],
  view: [
    ['/', Dashboard],
    ['/comments', Comments]
  ]
})
import fs from 'fs'

import {send} from 'micro'
import {router, get, post} from 'microrouter'
import {microGraphiql, microGraphql} from 'apollo-server-micro'

import schema from './schema'
import * as ip from './routes/ip'

const gqlHandler = microGraphql({schema})
const giqlHandler = microGraphiql({endpointURL: '/gql'})

const root = `${__dirname}/../dist`

const js = fs.readFileSync(`${root}/bundle.js`, 'utf8')
const css = fs.readFileSync(`${root}/styles.css`, 'utf8')
const html = fs.readFileSync(`${root}/index.html`, 'utf8')

const contentJS = async (req, res) => send(res, 200, js)
const contentCSS = async (req, res) => send(res, 200, css)
const contentHtml = async (req, res) => send(res, 200, html)

const init = router(
  get('/', contentHtml),
  get('/styles.css', contentCSS),
  get('/bundle.js', contentJS),
  get('/ip', ip.get),
  get('/gql', gqlHandler),
  post('/gql', gqlHandler),
  get('/giql', giqlHandler),
  async (req, res) => send(res, 404, 'Try somewhere else, my friend')
)

export default init
import fs from 'fs'

import {send} from 'micro'
import {router, get} from 'microrouter'

import * as ip from './routes/ip' 

const root = `${__dirname}/../dist`

const html = fs.readFileSync(`${root}/index.html`, 'utf8')
const css = fs.readFileSync(`${root}/styles.css`, 'utf8')
const js = fs.readFileSync(`${root}/bundle.js`, 'utf8')

const contentHtml = async (req, res) => send(res, 200, html)
const contentCSS = async (req, res) => send(res, 200, css)
const contentJS = async (req, res) => send(res, 200, js)

const init = router(
  get('/', contentHtml),
  get('/styles.css', contentCSS),
  get('/bundle.js', contentJS),
  get('/ip', ip.get)
)

export default init
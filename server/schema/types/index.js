import Game from './Game'
import Link from './Link'
import Stat from './Stat'
import User from './User'
import Query from './Query'
import Metric from './Metric'
import Comment from './Comment'

export const Schema = `
schema {
  query: Query
}`

export const Types = [Game, Link, Stat, User, Query, Metric, Comment]

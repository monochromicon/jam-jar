import Author from './Author'
import Mutation from './Mutation'
import Post from './Post'
import Query from './Query'

export const Schema = `
schema {
  query: Query
  mutation: Mutation
}`

export const Types = [
  Author,
  Mutation,
  Post,
  Query
]

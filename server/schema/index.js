import resolvers from './resolvers'
import { Types, Schema } from './types'

const { makeExecutableSchema } = require('graphql-tools')

const executableSchema = makeExecutableSchema({
  typeDefs: [Schema, ...Types],
  resolvers
})

export default executableSchema

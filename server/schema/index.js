const {makeExecutableSchema} = require('graphql-tools')

import resolvers from './resolvers'

import {Types, Schema} from './types'

const executableSchema = makeExecutableSchema({
  typeDefs: [
    Schema,
    ...Types
  ],
  resolvers
})

export default executableSchema
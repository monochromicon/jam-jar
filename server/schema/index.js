const {makeExecutableSchema} = require('graphql-tools')

import typeDefs from './types'
import resolvers from './resolvers'

const executableSchema = makeExecutableSchema({
  typeDefs, resolvers
})

export default executableSchema
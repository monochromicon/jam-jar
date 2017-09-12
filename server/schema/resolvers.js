import {
  title,
  event,
  theme,
  url,
  stats,
  metrics,
  description,
  links,
  authors,
  comments
} from '../data'

const resolvers = {
  Query: {
    game () {
      return {
        title,
        event,
        theme,
        url,
        stats,
        metrics,
        description,
        links,
        authors,
        comments
      }
    },
    comments () {
      return comments
    }
  }
}

export default resolvers

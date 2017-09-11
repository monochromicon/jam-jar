const Game = `
type Game {
  title: String!
  event: Int
  theme: String
  url: String!
  stats: [Stat]
  metrics: Metric
  description: [String]
  links: [Link]
  authors: [User]
  comments: [Comment]
}`

export default Game

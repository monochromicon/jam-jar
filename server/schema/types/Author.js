const Author = `
type Author {
  id: ID! # the ! means that every author object _must_ have an id
  firstName: String
  lastName: String
  posts: [Post] # the list of Posts by this author
}`

export default Author

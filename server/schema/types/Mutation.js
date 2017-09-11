const Mutation = `
type Mutation {
  upvotePost (
    postId: ID!
  ): Post
}`

export default Mutation
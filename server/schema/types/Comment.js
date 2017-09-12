const Comment = `type Comment {
  id: ID!
  commenter: User!
  text: [String]
  time: String
  likes: Int
  photo: String
}`

export default Comment

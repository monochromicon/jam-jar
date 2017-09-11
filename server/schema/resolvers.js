import {find, filter} from 'lodash'
import {
  title,
  eventNum,
  theme,
  url,
  stats,
  metrics,
  description,
  links,
  authors,
  comments
} from '../data'

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
]

const authors2 = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
]

const resolvers = {
  Query: {
    posts() {
      return posts;
    }
  },
  Mutation: {
    upvotePost(_, { postId }) {
      const post = find(posts, { id: postId });
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.votes += 1;
      return post;
    }
  },
  Author: {
    posts(author) {
      return filter(posts, { authorId: author.id });
    }
  },
  Post: {
    author(post) {
      return find(authors2, { id: post.authorId });
    }
  }
};

export default resolvers;
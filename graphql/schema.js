// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    game: Game!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
# The "Query" type is special: it lists all of the available queries thatpair inquerity
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    games: [Game]
    reviews: [Review]
    authors: [Author]
    game(id: ID!): Game
    review(id: ID!): Review
    author(id: ID!): Author
  }
`;

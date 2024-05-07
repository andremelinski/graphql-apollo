import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolver.js';

// const server setup
const server = new ApolloServer({
	// typeDefinitions -> definition of our data types and relations that they have with order data
	typeDefs,
	// resolver -> how we will response to queries to different data on the graph
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4001 },
});
console.log(`🚀  Server ready at: ${url}`);

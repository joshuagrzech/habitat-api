//A new GraphQL Apollo Server with Google Cloud Functions
// https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-cloud-functions

const { ApolloServer } = require('apollo-server-cloud-functions');
const {typeDefs} = require('./typeDefs');
const {resolvers} = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});


exports.handler = server.createHandler();

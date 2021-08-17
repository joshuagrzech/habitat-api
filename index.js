//A new GraphQL Apollo Server with Google Cloud Functions
// https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-cloud-functions

const { ApolloServer } = require('apollo-server');
const {typeDefs} = require('./typeDefs');
const {resolvers} = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/sandbox
  `);
});

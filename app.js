const { ApolloServer, gql } = require("apollo-server");
const db = require("./data");
const { importSchema } = require("graphql-import");

// resolver
const resolvers = require("./graphql/resolvers");
//resolvers dosyasında ki index i çeker

const server = new ApolloServer({
  typeDefs: importSchema("./graphql/schema.graphql"),
  resolvers,
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

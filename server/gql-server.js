const {ApolloServer} = require('apollo-server')
require('dotenv').config()

// Types -> query/mutation/subscription
const typeDefs = `
    type Query {
        totalPosts: Int!
    }
`

// Resolvers
const resolvers = {
    Query: {
        totalPosts: () => 42
    }
}

// GraphQL server
const apolloServer = new ApolloServer({
    typeDefs, resolvers
});

// Port
apolloServer.listen(process.env.PORT, function() {
    console.log(`GraphQL Server is ready at http://localhost:${process.env.PORT}`);
})
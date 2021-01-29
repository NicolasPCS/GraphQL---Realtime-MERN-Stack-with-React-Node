const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const http = require('http')
require('dotenv').config()

// Express server
const app = express()

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

// applyMiddleware --> connects ApolloServer to a specific HTTP framework ie: express
apolloServer.applyMiddleware({ app })

// Server
const httpserver = http.createServer(app)

// Rest endpoint
app.get('/rest', function(req,res){
    res.json({
        data: 'You hit rest endpoint'
    })
})

// Port
app.listen(process.env.PORT, function() {
    console.log(`Server is ready at http://localhost:${process.env.PORT}`);
    console.log(`GraphQL Server is ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`);
})
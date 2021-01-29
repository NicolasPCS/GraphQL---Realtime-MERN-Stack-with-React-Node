const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const http = require('http')
const path = require('path')
const {fileLoader, mergeTypes, mergeResolvers} = require('merge-graphql-schemas')
require('dotenv').config()

// Express server
const app = express()

// typeDefs
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './typeDefs')))

// Resolvers
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))

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
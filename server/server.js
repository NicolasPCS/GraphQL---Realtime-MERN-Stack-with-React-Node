const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const http = require('http')
const path = require('path')
const mongoose = require('mongoose')
const {fileLoader, mergeTypes, mergeResolvers} = require('merge-graphql-schemas')
require('dotenv').config()

// Express server
const app = express()

// DB
const db = async () => {
    try {
        const success = await mongoose.connect(process.env.DATABASE_CLOUD, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('DB connected')
    } catch(error) {
        console.log('DB connection error', error)
    }
}

// Execute database connection
db();

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
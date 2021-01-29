const {gql} = require('apollo-server-express')
const {posts} = require('../temp')

// Querys
const totalPosts = () => posts.length
const allPosts = () => posts

// Mutation resolver
const newPost = (parent, args, context) => {
    console.log(args)
    // Create a new post onject
    const post = {
        id: posts.length + 1,
        title: args.title,
        description: args. description
    }
    // Push new object to posts array
    posts.push(post)
    // Returning new post
    return post
}

module.exports = {
    Query: {
        totalPosts, 
        allPosts
    },
    Mutation: {
        newPost
    }
}
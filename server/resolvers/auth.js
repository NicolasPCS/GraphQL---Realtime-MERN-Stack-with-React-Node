const {gql} = require('apollo-server-express')

const me = () => 'Nicolas CS'

module.exports = {
    Query: {
        me
    }
}
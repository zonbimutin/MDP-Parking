const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID
        firstname: String
        lastname: String
        email: String
        password: String
        avatar: String
        isHost: Boolean
        createAt: String
    }
    type Token {
        token: String
    }

    input UserInput {
        firstname: String!
        lastname: String!
        email: String!
        password: String!
    }
    input LoginInput {
        email: String!
        password: String!
    }

    type Query {
        # User
        getUser: User
    }

    type Mutation {
        #User
        register(input: UserInput): User
        login(input: LoginInput): Token


    }
`;

module.exports = typeDefs;
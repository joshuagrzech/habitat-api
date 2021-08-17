const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar GraphQLDateTime
    type User {
        id: ID!
        apiConnected: Boolean!
        username: String!
     
        notifications: [Notification]
        bankAccount: BankAccount
        items: [Item]
        plaidAccessToken: String
        house: House
    },
    type Item {
        id: ID!
        user: User!
        house: House
        createdOn:GraphQLDateTime!
        deleted: Boolean!
        type: String!
        name: String!
        dueDate:GraphQLDateTime!
        shared: Boolean!
        sharedWith: [User]
        sharedBy: User
        updatedOn:GraphQLDateTime
        updatedBy: User
        deletedOn:GraphQLDateTime
        deletedBy: User
        amount: Int
        description: String
        monthly: Boolean
        weekly: Boolean
        reccuring: Boolean
        reccuringAmount: Int
    },
    type Notification {
        id: ID!
        message: String!
        createdAt:GraphQLDateTime!
        read: Boolean!
        user: User!
    },
    type BankAccount {
        id: ID!
        user: User!
        balance: Float
    },  
    type House {
        id: ID!
        name: String!
        users: [User]
        items: [Item]
    },
    type Query {
        user(id: ID!): User
        house(id: ID!): House
        item(id: ID!): Item
        bankAccount(id: ID!): BankAccount
        notification(id: ID!): Notification
      },
    input UserInput {
        id: ID!,
        username: String!
    },
    input HouseInput {
        name: String!
        users: [ID!]
    },
    input ItemInput {
        userId: ID!
        houseId: ID
        type: String!
        name: String!
        dueDate:GraphQLDateTime!
        shared: Boolean!
        sharedWith: [ID]
        sharedBy: ID
        updatedOn:GraphQLDateTime
        updatedBy: ID
        deletedOn:GraphQLDateTime
        deletedBy: ID
        amount: Int
        description: String
        monthly: Boolean
        weekly: Boolean
        reccuring: Boolean
        reccuringAmount: Int
    },
    input NotificationInput {
        message: String!
        user: ID!
    },
    input BankAccountInput {
        user: ID
        balance: Float
    },
    type Mutation {
        createUser(input: UserInput!): User
        createNotification(input: NotificationInput!): Notification
        updateNotification(id: ID!, input: NotificationInput!): Notification
        createBankAccount(input: BankAccountInput!): BankAccount
        createItem(input: ItemInput!): Item
        updateItem(id: ID!, input: ItemInput!): Item
        updateUser(id: ID!, input: UserInput!): User
        updateHouse(id: ID!, input: HouseInput!): House
        updateBankAccount(id: ID!, input: BankAccountInput!): BankAccount
    } 
`;

exports.typeDefs = typeDefs;
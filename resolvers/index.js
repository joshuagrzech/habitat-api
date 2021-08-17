const {user} = require('./user');
const {bankAccount} = require('./bankAccount');
const {notification} = require('./notification');
const {query} = require('./query');
const {mutation} = require('./mutation');
const {item} = require('./item');
const {house} = require('./house');
const resolvers = {
    User: user,
    BankAccount: bankAccount,
    Notification: notification,
    Query: query,
    Mutation: mutation,
    Item: item,
    House: house
};


exports.resolvers = resolvers;
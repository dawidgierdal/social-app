const { ApolloServer } = require('apollo-server');
const { mongoose } = require('mongoose');
const { PubSub } = require('graphql-subscriptions');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

require('dotenv').config();

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub })
})

mongoose.connect(process.env.MONGO_DB);
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

server.listen().then(res => {
    console.log(`Server running at ${res.url}`)
})
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers')
const { MONGODB } = require ('./config.js');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({re})
});

//WCXyb5T81NmYj51V

mongoose.connect(MONGODB, {useNewUrlParser : true, useUnifiedTopology: true }).then(() => {
    console.log('MongoDB Connected')
  return server.listen({port: 5000});
}).then( (res) => {
    console.log(`Server is running at ${res.url}`)
});


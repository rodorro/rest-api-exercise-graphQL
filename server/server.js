const express = require('express');
 path = require('path'),
 cookieParser = require('cookie-parser'),
 bodyParser = require('body-parser'),
 cors = require('cors');
 
const { ApolloServer } = require('apollo-server-express');

const users = require('./routes/users');
const cars = require('./routes/cars');

const app = express();

// setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api/users', users);
app.use('/api/cars', cars);

const typeDefs = require('./graphql/type-defs');
const resolvers = require('./graphql/resolvers');

const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers
});
graphqlServer.applyMiddleware({ app });

app.set('port', process.env.PORT || 3050);
app.listen(app.get('port'));

console.log('Listening on port: ' + app.get('port'));
console.log(`Listening on port: ${app.get('port')}${graphqlServer.graphqlPath}`);

module.exports = app;

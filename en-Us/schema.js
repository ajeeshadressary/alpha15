var graphql = require ('graphql');

// Here is some dummy data to make this piece of code simpler.
// It will be changeable after introducing mutation.
var TODOs = [
  {
    "id": 144641,
    "title": "Read emails",
    "completed": false
  },
  {
    "id": 1446412,
    "title": "Buy orange",
    "completed": true
  }
];

var TodoType = new graphql.GraphQLObjectType({
  name: 'todo',
  fields: function () {
    return {
      id: {
        type: graphql.GraphQLInt
      },
      title: {
        type: graphql.GraphQLString
      },
      completed: {
        type: graphql.GraphQLBoolean
      }
    }
  }
});

var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      todos: {
        type: new graphql.GraphQLList(TodoType),
        resolve: function () {
          return TODOs;
        }
      }
    }
  }
});

module.exports = new graphql.GraphQLSchema({
  query: queryType
});
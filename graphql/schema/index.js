const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { clientFields, projectFields } = require("../fields");
const { clientMutations } = require("../fields/clients");

const rootQuery = new GraphQLObjectType({
  name: "rootQueryType",
  fields: { ...clientFields, ...projectFields },
});
const mutation = new GraphQLObjectType({
  name: "mutations",
  fields: {
    ...clientMutations,
  },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation,
});

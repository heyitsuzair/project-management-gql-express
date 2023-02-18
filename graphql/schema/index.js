const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const {
  clientFields,
  projectFields,
  projectMutations,
  clientMutations,
} = require("../fields");

const rootQuery = new GraphQLObjectType({
  name: "rootQueryType",
  fields: { ...clientFields, ...projectFields },
});
const mutation = new GraphQLObjectType({
  name: "mutations",
  fields: {
    ...clientMutations,
    ...projectMutations,
  },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation,
});

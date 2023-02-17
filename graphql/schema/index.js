const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { clientFields, projectFields } = require("../fields");

const rootQuery = new GraphQLObjectType({
  name: "rootQueryType",
  fields: { ...clientFields, ...projectFields },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
});

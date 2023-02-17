const { GraphQLID, GraphQLString, GraphQLObjectType } = require("graphql");
const { clientType } = require("../index");

// Project Type
const projectType = new GraphQLObjectType({
  name: "project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: { type: clientType },
  }),
});
module.exports = { projectType };

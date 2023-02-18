const { GraphQLID, GraphQLString, GraphQLObjectType } = require("graphql");
const { clientType } = require("../client");
const { findOneClient } = require("../../../controllers/clients");

// Project Type
const projectType = new GraphQLObjectType({
  name: "project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: clientType,
      resolve: (parent) => findOneClient(parent.clientId),
    },
  }),
});
module.exports = { projectType };

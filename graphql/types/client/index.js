const { GraphQLID, GraphQLString, GraphQLObjectType } = require("graphql");

// Client Type
const clientType = new GraphQLObjectType({
  name: "client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});
module.exports = { clientType };

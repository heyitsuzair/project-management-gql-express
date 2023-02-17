const { GraphQLList, GraphQLID } = require("graphql");
const { findOne, findAll } = require("../../../controllers/clients");
const { clientType } = require("../../types");

module.exports.clientFields = {
  clients: {
    type: new GraphQLList(clientType),
    resolve: () => findAll(),
  },
  client: {
    type: clientType,
    args: { id: { type: GraphQLID } },
    resolve: (parents, args) => findOne(args),
  },
};

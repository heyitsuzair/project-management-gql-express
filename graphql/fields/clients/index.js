const { GraphQLList, GraphQLID } = require("graphql");
const {
  findOneClient,
  findAllClients,
} = require("../../../controllers/clients");
const { clientType } = require("../../types");

module.exports.clientFields = {
  clients: {
    type: new GraphQLList(clientType),
    resolve: () => findAllClients(),
  },
  client: {
    type: clientType,
    args: { id: { type: GraphQLID } },
    resolve: (parents, args) => findOneClient(args),
  },
};

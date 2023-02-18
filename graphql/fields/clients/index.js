const {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = require("graphql");
const {
  findOneClient,
  findAllClients,
  createClient,
  deleteClient,
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
    resolve: (parent, args) => findOneClient(args.id),
  },
};
module.exports.clientMutations = {
  createClient: {
    type: clientType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      phone: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args) => createClient(args),
  },
  deleteClient: {
    type: clientType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    resolve: (parent, args) => deleteClient(args.id),
  },
};

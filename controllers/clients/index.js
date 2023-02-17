const { clients } = require("../../sampleData");

module.exports.findAllClients = () => {
  return clients;
};
module.exports.findOneClient = (args) => {
  return clients.find((client) => client.id === args.id);
};

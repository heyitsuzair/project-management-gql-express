const { clients } = require("../../sampleData");

module.exports.findAll = () => {
  return clients;
};
module.exports.findOne = (args) => {
  return clients.find((client) => client.id === args.id);
};

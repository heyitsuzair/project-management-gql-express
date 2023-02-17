const { projects } = require("../../sampleData");

module.exports.findAll = () => {
  return projects;
};
module.exports.findOne = (args) => {
  return projects.find((client) => client.id === args.id);
};

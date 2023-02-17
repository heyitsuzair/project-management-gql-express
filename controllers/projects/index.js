const { projects } = require("../../sampleData");

module.exports.findAllProjects = () => {
  return projects;
};
module.exports.findOneProject = (args) => {
  return projects.find((client) => client.id === args.id);
};

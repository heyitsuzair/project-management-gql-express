const { GraphQLList, GraphQLID } = require("graphql");
const { findOne, findAll } = require("../../../controllers/projects");
const { clientType, projectType } = require("../../types");

module.exports.projectFields = {
  projects: {
    type: new GraphQLList(projectType),
    resolve: () => findAll(),
  },
  project: {
    type: clientType,
    args: { id: { type: GraphQLID } },
    resolve: (parents, args) => findOne(args),
  },
};

const { GraphQLList, GraphQLID } = require("graphql");
const {
  findOneProject,
  findAllProjects,
} = require("../../../controllers/projects");
const { projectType } = require("../../types");

module.exports.projectFields = {
  projects: {
    type: new GraphQLList(projectType),
    resolve: () => findAllProjects(),
  },
  project: {
    type: projectType,
    args: { id: { type: GraphQLID } },
    resolve: (parent, args) => findOneProject(args),
  },
};

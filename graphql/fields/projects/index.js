const {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLEnumType,
} = require("graphql");
const {
  findOneProject,
  findAllProjects,
  createProject,
  deleteProject,
  updateProject,
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
module.exports.projectMutations = {
  createProject: {
    type: projectType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
      status: {
        type: new GraphQLEnumType({
          name: "projectStatus",
          values: {
            new: { value: "Not Started" },
            progress: { value: "In Progress" },
            completed: { value: "Completed" },
          },
        }),
        defaultValue: "Not Started",
      },
      clientId: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args) => createProject(args),
  },
  deleteProject: {
    type: projectType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, { id }) => deleteProject(id),
  },
  updateProject: {
    type: projectType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
      status: {
        type: new GraphQLEnumType({
          name: "updateProjectStatus",
          values: {
            new: { value: "Not Started" },
            progress: { value: "In Progress" },
            completed: { value: "Completed" },
          },
        }),
      },
      clientId: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent, args) => updateProject(args),
  },
};

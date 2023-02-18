const ProjectsModel = require("../../models/ProjectsModel");
const { isValidObjectId } = require("mongoose");

module.exports.findAllProjects = async () => {
  return await ProjectsModel.find();
};
module.exports.findOneProject = async (id) => {
  if (!isValidObjectId(id)) {
    return null;
  }
  return await ProjectsModel.findById(id);
};
module.exports.createProject = async (args) => {
  return await ProjectsModel.create(args);
};
module.exports.deleteProject = async (id) => {
  if (!isValidObjectId(id)) {
    return null;
  }
  return await ProjectsModel.findByIdAndDelete(id);
};

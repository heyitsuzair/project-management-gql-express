const { isValidObjectId } = require("mongoose");
const ClientsModel = require("../../models/ClientsModel");

module.exports.findAllClients = async () => {
  return await ClientsModel.find();
};
module.exports.findOneClient = async (id) => {
  if (!isValidObjectId(id)) {
    return null;
  }
  return await ClientsModel.findById(id);
};
module.exports.createClient = async (args) => {
  return await ClientsModel.create(args);
};
module.exports.deleteClient = async (id) => {
  return await ClientsModel.findByIdAndDelete(id);
};

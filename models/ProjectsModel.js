const mongoose = require("mongoose");
const ProjectsModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clients",
    required: true,
  },
});
module.exports = mongoose.model("projects", ProjectsModel);

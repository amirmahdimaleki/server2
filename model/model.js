const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: {
    type: String
  },
});


module.exports = mongoose.model("Todo", TodoSchema);
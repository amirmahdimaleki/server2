const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: {type: String, required:true},
  title: {type: String},
  name: {type: String, required:true},
  age: {type: Number, required:true},
  linkedIn: {type: String, required:true},
  github: {type: String, required:true},
  languages: [{type: String, required:true}],
  skills: {type: String, required:true},
  image: {type: String, required:true},
},{

  timestamps: true
}
);


module.exports = mongoose.model("Todo", TodoSchema);
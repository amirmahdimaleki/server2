const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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


module.exports = mongoose.model("User", UserSchema);
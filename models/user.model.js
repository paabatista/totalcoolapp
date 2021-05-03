const mongoose = require("mongoose");

var usuariosSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true, trim: true, minlength: 3 },
    password: { type: String },
    address: { type: String },
    phone: { type: String },
    arrayOfFavoriteRecipes: { type: Array }, //id of recipes favorited
  },
  {
    timestamps: true,
  }
);

// mongoose.model('User',usuariosSchema,'users');

const User = mongoose.model("User", usuariosSchema);

module.exports = User;

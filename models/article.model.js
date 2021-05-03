const mongoose = require("mongoose");

var articleSchema = new mongoose.Schema(
  {
    title: { type: String },
    subtitle: { type: String, required:true },
    author: { type: String },
    html: { type: String },
    dateCreated: { type: Date },
    tags: { type: Array },
    totalTime: { type: Number },
    yield: { type: Number },
    calories: { type: Number },
    cookTime: { type: Number },
    prepTime: { type: Number },
    totalTime: { type: Number },
    ingredients: { type: Array },
    instructions: { type: Array },
    usersWhoFavorited: { type: Array },
    netCarbs: { type: String },
    
      image : {type:BinData}
          
  },
  {
    timestamps: true,
  }
);

//mongoose.model('Article',articleSchema,'articles');

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;

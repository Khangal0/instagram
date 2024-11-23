const { Schema, default: mongoose } = require("mongoose");

const postSchema = new Schema({
  caption: { type: String, required: true },
  postImg: { type: String, required: true },
  userId: { type: String },
  comments: [{ type: mongoose.Types.ObjectId, ref: "comment" }],
});

const postModel = mongoose.model("Posts", postSchema);

module.exports = postModel;

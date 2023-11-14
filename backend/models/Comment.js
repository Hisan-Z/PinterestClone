const { Schema, model, Types } = require('mongoose')

const commentSchema = new Schema(
  {
    pinId: {
      type: Types.ObjectId,
      ref: "Pins",
    },
    username: {
      type: String,
      required: true,
    },
    commentText: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = new model("Comment", commentSchema);

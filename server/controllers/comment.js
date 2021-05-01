const Comment = require("../models/comment");

function addComment(input, ctx) {
  try {
    const comment = new Comment({
      parkingId: input.parkingId,
      userId: ctx.user.id,
      comment: input.comment,
    });
    comment.save();
    return comment;
  } catch (error) {
    console.log(error);
  }
}

async function getComments(parkingId) {
  const result = await Comment.find({ parkingId }).populate("userId");
  return result;
}

module.exports = {
  addComment,
  getComments,
};
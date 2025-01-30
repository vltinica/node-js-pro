const express = require("express");

const router = express.Router();



router.get("/comments", getCommentsHandler)
router.post("/comments", postCommentHandler)
router.get("/comments/:commentId", getSingleCommentHandler);
router.delete("/comments/:commentId", deleteCommentHandler);

module.exports = router;
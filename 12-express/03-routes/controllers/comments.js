const getRootHandler = (req, res) => {
    res.send("Get root route");
};

const getCommentsHandler = (req, res) => {
    res.send("Get comments route");
};

const postCommentHandler = (req, res) => {
    res.send("Post comments route");
};

const getCommentHandler = (req, res) => {
    res.send(`Get comments route. CommentId: ${req.params.commentId}`);
};
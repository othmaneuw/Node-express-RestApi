const posts = require("../data");

const getPosts = (req, res) => {
  res.json(posts);
};

const addPost = (req, res) => {
  let { id, title, description } = req.body;
  posts.push({
    id,
    title,
    description,
  });
  res.json(posts);
};

const getOnePost = (req, res) => {
  const { id } = req.params;
  const specificPost = posts.find((post) => post.id === Number(id));
  if (!specificPost) {
    return res
      .status(404)
      .json({ success: false, msg: "No Post with that id" });
  }
  res.json(specificPost);
};

const editPost = (req, res) => {
  const updatedPost = posts.find((post) => post.id === +req.params.id);
  if (updatedPost) {
    posts = posts.map((post) => {
      if (post.id === Number(req.params.id)) {
        post.title = req.body.title;
      }
      return post;
    });
    return res.json(posts);
  }
  res.status(404).json({ success: false, msg: "No Post with that id" });
};

const deletePost = (req, res) => {
  let { postId } = req.params;
  let test = posts.some((post) => post.id === Number(postId));
  if (test) {
    //console.log(test);
    //console.log("hello");
    let filteredPost = posts.filter((post) => post.id !== +postId);
    //console.log(filteredPost);
    res.status(200).json(filteredPost);
  } else {
    res.status(404).json({ msg: "Noo" });
  }
};

module.exports = {
  getPosts,
  addPost,
  getOnePost,
  editPost,
  deletePost,
};

const db = require('../db');
const jwt = require('jsonwebtoken');

const getPosts = (req, res) => {
  const sqlQeury = "SELECT * FROM posts"

  db.query(sqlQeury, [req.query.cat], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err,
        msg: "error",
        success: false,
        posts: null
      });
    }

    return res.status(200).json({
      err: "",
      msg: "",
      success: true,
      posts: result
    });

  });

}

const getSinglePost = (req, res) => {
  // get username from users table & post details from posts table
  const sqlQuery = "SELECT `username`, p.id, `title`, `category`, `img`, `body`, `date` FROM users u JOIN posts p ON u.id = p.user_id WHERE p.id = ?"

  db.query(sqlQuery, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err,
        msg: "error",
        success: false,
        posts: null
      });
    }


    return res.status(200).json({
      err: "",
      msg: "",
      success: true,
      posts: result[0]
    });

  });
}

const createPost = (req, res) => {
  console.log(req.body)
  const token = req.cookies.access_token
  if (!token) return res.status(400).json({
    error: "",
    msg: "Action not authorized!",
    success: false,
    posts: null
  });

  // verify jwt
  jwt.verify(token, "jwtkey", (err, userAuthInfo) => {
    if (err) return res.status(403).json({
      error: "",
      msg: "User token not valid!",
      success: false,
      posts: null
    });

    // insert new post to DB
    const sqlQuery = "INSERT INTO posts(`title`, `category`, `img`, `body`, `date`, `user_id`) VALUES (?,?,?,?,?,?)"
    const values = [
      req.body.title,
      req.body.category,
      req.body.img,
      req.body.body,
      req.body.date,
      userAuthInfo.id
    ]

    db.query(sqlQuery, values, (err, result) => {
      if (err) return res.status(500).json({
        error: "",
        msg: "Action Failed!",
        success: false,
        posts: null
      });

      return res.json({
        error: "",
        msg: "Post Added Successfully",
        success: true,
        posts: null
      });

    });
  });

}

const updatePost = (req, res) => {
  const token = req.cookies.access_token
  if (!token) return res.status(400).json({
    error: "",
    msg: "Action not authorized!",
    success: false,
    posts: null
  });

  // verify jwt
  jwt.verify(token, "jwtkey", (err, userAuthInfo) => {
    if (err) return res.status(403).json({
      error: "",
      msg: "User token not valid!",
      success: false,
      posts: null
    });

    // insert new post to DB
    const postId = req.params.id
    const sqlQuery = "UPDATE posts SET `title`=?, `category`=?, `img`=?, `body`=? WHERE `id`=? AND `user_id`=?"
    const values = [
      req.body.title,
      req.body.category,
      req.body.img,
      req.body.body
    ]

    db.query(sqlQuery, [...values, req.params.id, userAuthInfo.id], (err, result) => {
      if (err) return res.status(500).json({
        error: "",
        msg: "Action Failed!",
        success: false,
        posts: null
      });

      return res.json({
        error: "",
        msg: "Post Updated Successfully",
        success: true,
        posts: null
      });

    });
  });
}

const deletePost = (req, res) => {
  // check active user token available else return error
  const token = req.cookies.access_token
  if (!token) return res.status(400).json({
    error: "",
    msg: "Action not authorized!",
    success: false,
    posts: null
  });

  // verify jwt to check if user is the post author
  jwt.verify(token, "jwtkey", (err, userAuthInfo) => {
    if (err) return res.status(403).json({
      error: "",
      msg: "User token not valid!",
      success: false,
      posts: null
    });

    // delete post from DB on valid token
    const postId = req.params.id
    const sqlQuery = "DELETE FROM posts WHERE id = ? AND `user_id` = ?"

    db.query(sqlQuery, [postId, userAuthInfo.id], (err, result) => {
      if (err) return res.status(403).json({
        error: "",
        msg: "User action not authorized!",
        success: false,
        posts: null
      });
    });

    return res.status(200).json({
      error: "",
      msg: "Post deleted succesfully",
      success: true,
      posts: null
    });
  })
}

const getRecommendedPosts = (req, res) => {
  const sqlQuery = "SELECT * FROM posts WHERE category = ?"

  db.query(sqlQuery, [req.params.category], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err,
        msg: "error",
        success: false,
        posts: null
      });
    }

    return res.status(200).json({
      err: "",
      msg: "",
      success: true,
      posts: result
    });

  });

}


module.exports = {
  getPosts,
  getSinglePost,
  getRecommendedPosts,
  createPost,
  updatePost,
  deletePost

}
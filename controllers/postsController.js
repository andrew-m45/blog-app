const db = require('../db')

const getAllPost = (req, res) => {
  const sqlQeury = "SELECT * FROM posts"

  db.query(sqlQeury, (err, result) => {
    if (err) {
      return res.json({
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
  const sqlQuery = "SELECT `username`, p.id, `title`, `img`, `body`, `date` FROM users u JOIN posts p ON u.id = p.user_id WHERE p.id = ?"

  db.query(sqlQuery, [req.params.id], (err, result) => {
    if (err) {
      return res.json({
        error: err,
        msg: "error",
        success: false,
        posts: null
      });
    }

    console.log(result[0])
    return res.status(200).json({
      err: "",
      msg: "",
      success: true,
      posts: result[0]
    });

  });
}


module.exports = {
  getAllPost,
  getSinglePost,
}
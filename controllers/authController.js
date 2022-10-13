const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSignUp = (req, res) => {
  // check if user aldready exists
  const sqlQuery = "SELECT * FROM users WHERE email = ? OR username = ?"

  db.query(sqlQuery, [req.body.email, req.body.username], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err,
        msg: "error",
        success: false
      });
    }

    if (result.length > 0) {
      return res.status(409).json({
        error: "",
        msg: "user aldready exists!",
        success: false
      });
    }

    // register user record in DB & hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const sqlQuery = "INSERT INTO users (`username`, `email`, `password`) VALUES (?,?,?)"
    const values = [req.body.username, req.body.email, hash]

    db.query(sqlQuery, values, (err, result) => {
      if (err) {
        return res.status(500).json({
          error: err,
          msg: "error",
          success: false
        });
      }

      return res.status(200).json({
        error: "",
        msg: "user created successfully",
        success: true
      });

    });
  });

}

const userLogin = (req, res) => {
  // check if user exists
  const sqlQuery = "SELECT * FROM users WHERE username = ?"

  db.query(sqlQuery, [req.body.username], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err,
        msg: "error",
        success: false
      });
    }

    // if no user record found
    if (result.length === 0) {
      return res.status(404).json({
        error: "",
        msg: "User not found!",
        success: false
      });
    }

    // if user exists validate password hash
    const isPasswordMatch = bcrypt.compareSync(req.body.password, result[0].password);

    // if password not a match
    if (!isPasswordMatch) {
      return res.status(400).json({
        error: "",
        msg: "Username or password incorrect!",
        success: false
      });
    }

    // create jwt to authenticate user & send token to store as cookie
    const token = jwt.sign({ id: result[0].id }, "jwtkey");
    // user information to send to client exclude password hash
    const { password, ...userDetails } = result[0];

    res.cookie("access_token", token, {
      overWrite: true
    }).status(200).json({
      error: "",
      msg: "User logged in",
      success: true,
      userDetails
    });

  });
}

const userLogout = (req, res) => {
  // clear jwt token
  res.clearCookie("access_token").status(200).json({
    error: "",
    msg: "User logged out",
    success: true,
  });
}


module.exports = {
  userSignUp,
  userLogin,
  userLogout
}
// npm dependencies
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const cookieParser = require('cookie-parser')

// routes
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');

// initialize express app
const app = express();

// logger
app.use(morgan('dev'));

// JSON, CORS & cookie-parser middleware
app.use(express.json());
app.use(cookieParser());


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // file destination 
    cb(null, 'client/public/uploads')
  },
  filename: function (req, file, cb) {
    // specify filename
    cb(null, Date.now() + file.originalname)
  }
})

// config multer diskStorage
const upload = multer({ storage });

// file upload route
app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  console.log(file)
  // return filename
  res.status(200).json(file.filename);
})

// route handlers
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);

// start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`))
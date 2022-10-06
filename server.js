// npm dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// routes
const authRoutes = require('./routes/auth');

// initialize express app
const app = express();

// logger
app.use(morgan('dev'));

// JSON, CORS & cookie-parser middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// route handlers
app.use('/api/auth', authRoutes);

// start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`))
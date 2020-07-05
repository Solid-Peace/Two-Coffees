const express = require('express');
const logger = require('./middleware/logger');
const userRoutes = require('./routes/api/user');
const authRoutes = require('./routes/api/auth');
const authMiddleware = require('./middleware/auth');

// 
// 
// SERVER 
// 
// 

let app = express();

// Serve statics files
app.use(express.static('public'));
app.use(express.static('dist'));

// To see incoming request
app.use(logger);

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//
//
//                   Important ! 
//
// This middleware is set on application level
// It checks if client request has jwt to authenticate him
// If not, client is redirect to '/' to registrating loging
// If Yes, client is redirect to '/home' personalized UI
//
//
app.use(authMiddleware.authenticateJWT);


// API routes to Users data Handling
app.use('/api/auth/', authRoutes);

// API routes to Users data Handling
app.use('/api/user/', userRoutes);


// Application entry
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

const PORT = process.env.PORT || 5000;

// 
// Server Listening
// 

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`) );
const express = require('express');
const logger = require('./middleware/logger');
const userRoutes = require('./routes/api/user');

let app = express();

// Serve statics files
app.use(express.static('public'));
app.use(express.static('dist'));

// To see incoming request
app.use(logger);

// API routes to Users data Handling
app.use('/api/user/', userRoutes);


// Application entry
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`) );
const express = require('express');

// Point server to route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Create an express server
const app = express();

// Set PORT
const PORT = process.env.PORT || 3001;

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
const express = require('express');
const path = require('path');
const app = express();

// Serve all static files in the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server on port 8000
app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
});

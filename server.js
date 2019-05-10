const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || '4000';

app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all request to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// A simple route to test the server
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
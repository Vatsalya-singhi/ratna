const express = require("express");
const path = require('path');
const compression = require('compression');

const PORT = process.env.PORT || 3000;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './build')));
app.use(express.json())
// Compress all HTTP responses
app.use(compression());
app.use(function (req, res, next) {
    res.set('Cache-control', 'public, max-age=300')
})


// Handle GET requests to /api route
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
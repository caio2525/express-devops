const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("<h2>vingança dos sith, Hello There. General Kenobi. Darth Vader</h2>");
})

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`Listening on port ${port}`)})

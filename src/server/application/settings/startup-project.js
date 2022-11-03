require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

function run() {
    app.listen(process.env.APPLICATION_PORT);
}

module.exports = run;
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`<h1 style="text-align:center">Bistro Is Running...</h1>`)
})

app.listen(port, () => {
    console.log(`Bistro Is Running On Port: ${port}`)
})
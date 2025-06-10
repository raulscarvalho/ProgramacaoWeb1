const express = require('express');
const app = express();
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Hello API on port ${PORT}`);
})

app.use(express.urlencoded({ extended: true }))

app.get('/v1/hi', function (req, res) {
    const out = {
        msg: "Hello, world!"
    }
    res.status(200).json(out)
})

app.get('/v1/hi/user/:name', function (req, res) {
    const out = {
        msg: "Hello, " + req.params.name
    }
    res.status(200).json(out)
})

app.post('/v1/hi', function (req, res) {
    const { name } = req.body
    const out = {
        msg: "Hello, " + name
    }
    res.status(200).json(out)
})
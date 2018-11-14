const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Done")
});

app.get('/user/:name', (req, res) => {
    res.send(req["params"]["name"])
});

app.get('/user/:id', (req, res) => {
    res.send(req["params"]["id"]);
})

app.listen(3000, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Server is listening at 3000")
    }
})
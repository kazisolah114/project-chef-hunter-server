const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
    res.json({name: "solah"})
})
const data = require('./data/data.json')

app.get('/chefs', (req, res) => {
    res.send(data)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chef = data.find(chef => chef.id == id);
    res.send(chef);
})
app.listen(5000, () => {
    console.log("server is running on port 5000")
})
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.json({name: "solah"})
})
app.listen(5000, () => {
    console.log("server is running on port 5000")
})
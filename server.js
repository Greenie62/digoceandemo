const express = require('express');

const app = express();
const path = require('path')

app.use(express.static('public'))


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "public/index.html"))
})


app.listen(3005,console.log(`Listening in on port 3005`))
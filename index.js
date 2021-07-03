const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, "pages", "index.html"))
})

app.listen(2989, ()=>{
    console.log('App is listening on port 2989')
})
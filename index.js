const express= require('express')
require('dotenv').config()
const mongoose=require('mongoose')
var cors = require('cors')
const path = require('path');
const app = express()
// const MarioRoute= require('./routes/MarioRoute')
app.use(cors())
const userRoute= require('./routes/userRoute')
const coursesRoute = require('./routes/courseRoute')
const Port= process.env.PORT || 3000
const URL= process.env.URL
app.use(express.json())
mongoose.connect(URL).then(console.log('connection successfull'))

// app.use('/api', MarioRoute)
app.use('/api/auth', userRoute)
app.use('/api', coursesRoute)

app.get("/", (req, res) => {
    app.use(express.static(path.resolve( __dirname, "frontend vite", "dist")));
     res.sendFile(path.resolve( __dirname, "frontend vite", "dist", "index.html"));
    });

app.listen(Port,()=>{
    console.log(`server is running at ${Port}`)
})
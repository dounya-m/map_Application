const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const cors = require('cors')
// const {ErrorHandler} = require('./middlewares/errorHandler')
const bodyParser = require('body-parser')   
// const mongoose = require("mongoose");
const connectDB = require('./config/db.js')
const router = require('./routes/router.js')
const PORT = process.env.PORT || 3000;


const app = express()
connectDB()
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 

// parse application/json
app.use(bodyParser.json()) 

app.use(router)
// app.use(ErrorHandler)


app.listen(PORT , () => {
    console.log(`App is listen att http://localhost:${PORT}`.blue.underline);
})

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
  });  
const express = require("express")
const logger = require("morgan")
// const mongoose = require("mongoose")

const PORT =  8080

const app = express()

app.use(logger("dev"))



app.use(express.urlencoded({extended:true}));
app.use(express.json);
app.use(express.static("public"));





app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
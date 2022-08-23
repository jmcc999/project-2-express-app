const express = require("express")

const app = express()

//set up static assets, middleware
app.use(express.static("public"))




//link models
const materials = require("./models/materials.js")



//routes

app.get("/", (req, res) => {
    res.render("index.ejs", {
    allMats : materials})
})




app.listen (3000, () => {
    console.log("on")
})
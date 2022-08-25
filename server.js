const express = require("express")

const app = express()

const port = 3000

//set up static assets, middleware
app.use(express.static("public"))

// //link models
const materials = require("./models/materials.js")

//routes
app.get("/", (req, res) => {
	res.render("home.ejs")
})

app.get("/materials", (req, res) => {
    res.render("index.ejs", {
        allMats : materials
    })
})

app.get("materials/new", (req, res) => {
    res.render("new.ejs")
})

// app.post("materials/:id", (req, res) => {

// })

app.get("/materials/:id", (req, res) => {
    res.render("show.ejs", {
        material : materials[req.params.id]
    })
})

//listener

app.listen (port, () => {
    console.log("listening on port ", port)
})
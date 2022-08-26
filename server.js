const express = require("express")

const app = express()

const port = 3000

//set up static assets, middleware
app.use(express.static("public"))

// //link models
const materials = require("./models/materials.js")
const equipment = require("./models/equipment.js")
const monsters = require("./models/monsters.js")
//routes
app.get("/", (req, res) => {
	res.render("home.ejs")
})

app.get("/materials", (req, res) => {
    res.render("materials.ejs", {
        allMats : materials
    })
})

app.get("/equipment", (req, res) => {
    res.render("equipment.ejs", {
        allEquipment : equipment
    })
})

app.get("/monsters", (req, res) => {
    res.render("monsters.ejs", {
        allMonsters : monsters
    })
})

app.get("/materials/new", (req, res) => {
    res.render("newmats.ejs")
})

app.get("/equipment/new", (req, res) => {
    res.render("newequipment.ejs")
})

app.get("/monsters/new", (req, res) => {
    res.render("newmons.ejs")
})
app.post("/materials/", (req, res) => {
    res.send(req.body)
})

app.get("/materials/:id", (req, res) => {
    res.render("showmats.ejs", {
        material : materials[req.params.id]
    })
})

app.get("/equipment/:id", (req, res) => {
    res.render("showequipment.ejs", {
        equipment : equipment[req.params.id]
    })
})

app.get("/monsters/:id", (req, res) => {
    res.render("showmons.ejs", {
        monsters : monsters[req.params.id]
    })
})

//listener

app.listen (port, () => {
    console.log("listening on port ", port)
})
const express = require("express")

const app = express()

const port = 3000

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/basiccrud", {useNewUrlParser: true})
mongoose.connection.once("open", () => {
    console.log("candy-gram for mongo")
})

//set up static assets, middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


// //link models
// const materials = require("./models/materials.js")
const equipment = require("./models/equipment.js")
const monsters = require("./models/monsters.js")
const Material = require("./models/materials.js")

//routes
app.get("/", (req, res) => {
	res.render("home.ejs")
})

app.get("/materials", (req, res) => {
    Material.find({}, (error, material)=>{
    res.render("materials.ejs", {
        allMats : material
         })
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
    Material.create(req.body, (error, createdMaterial) => {
        if (error){
            console.log(erros)
            res.send(error)
        }else{
            res.send(createdMaterial)
        }
    })
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

//seed
// const seedMats = [
//     {
//         type: "Food",
//         name: "Apple",
//         location: "Hyrule Field",
//         info: "A common fruit found on trees all around Hyrule. eat it fresh, or cook it to increase its effect."
//     },
//     {
//         type: "Food",
//         name: "Palm Fruit",
//         location: "East Necluda, Gerudo Desert",
//         info: "Fruit from palm trees that grow near the ocean. It doesn't offer any special effects but will increase your heart recovery when used as an ingredient."
//     },
//     {
//         type:"Food",
//         name:"Acorn",
//         location:"the forests of Hyrule",
//         info:"Often found on the ground near trees. Squirrels adore this nut, so you may have competition while foraging. Add one to a meal for a nutty seasoning."
    //  },
    //  {
    //     type:"Food",
    //     name:"Armored Carp",
    //     location:"Lanayru Great Spring, East Necluda",
    //     info:"Calcium deposits in the scales of this ancient fish make them as hard as armor. Cooking it into a dish will fortify your bones, temporarily increasing your defense."
    //  },
    //  {
    //     type:"Food",
    //     name:"Armored Porgy",
    //     location:"Necluda Sea, Lanayru Sea",
    //     info:"This porgy's body is covered in armor-hard scales. The compounds in its scales, when cooked into a dish, fortify your bones and temporarily boost your defense."
    //  },
    //  {
    //     type:"Plant",
    //     name:"Armoranth",
    //     location:"Akkala Highlands, Hyrule Ridge",
    //     info:"This tough medicinal plant cannot be broken, but it can be cooked. Its durable yet flexible fibers raise your defense when cooked into a dish."     },
    // {
    //     type:"Minerals",
    //     name:"Amber",
    //     location:"Ore Deposits or Rare Ore Deposits",
    //     info:"A fossilized resin with a caramelesque sheen to it. It's been valued as a component in decorations and crafting since ancient times."
    //  },
    // {
    //     type:"Monster parts",
    //     name:"Ancient Core",
    //     location:"",
    //     info:""
    //  },
    //  {
    //     type:"Monster parts",
    //     name:"Ancient Gear",
    //     location:"",
    //     info:""
    //  },
    //  {
    //     type:"Monster parts",
    //     name:"Ancient Screw",
    //     location:"",
    //     info:""
    //  },
    //  {
    //     type:"Monster parts",
    //     name:"Ancient Shaft",
    //     location:"",
    //     info:""
    //  },
    //  {
    //     type:"Monster parts",
    //     name:"Ancient Spring",
    //     location:"",
    //     info:""
    //  },
    //  {
    //     type:"Food",
    //     name:"Big Hearty Radish",
    //     location:"Akkala Highlands, Lanayru Great Springs",
    //     info:"This hearty radish has grown much larger than the average radish. It's rich in analeptic compounds that, when cooked into a dish, temporarily increase your maximum hearts."
    //  },
    //  {
    //     type:"Food",
    //     name:"Big Hearty Truffle",
    //     location:"Hebra Mountains, Great Hyrule Forest",
    //     info:"Years of going unpicked have allowed this hearty truffle to grow quite large. It's chock-full of nutrients. When cooked into a dish, it temporarily increases your maximum hearts."
    //  },
    //  {
    //     type:"Food",
    //     name:"Bird Egg",
    //     location:"Find them in nests in trees throughout Hyrule",
    //     info:"A fresh bird egg necessary for making dishes such as omelets and crepes. You can snag them from birds' nests if you're sneaky. Nutritious and delicious, perfect for cooking."
    //  }]
    //  Material.create(seedMats, (error, material) => {
    //     if (error) { 
    //       console.log(error)
    //     } else { 
    //       console.log(material)
    //     }

    //     db.close()
    //   })


    //listener
app.listen (port, () => {
    console.log("listening on port ", port)
})
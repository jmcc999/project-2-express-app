const express = require("express")
const router = express.Router()
const Material = require("../models/materials.js")

router.get("/", (req, res) => {
    Material.find({}, (error, material)=>{
    res.render("materials.ejs", {
        allMats : material
         })
    })
})

router.get("/materials/new", (req, res) => {
    res.render("newmats.ejs")
})

router.post("/materials/", (req, res) => {
    Material.create(req.body, (error, createdMats) => {
        if (error){
            console.log(error)
            res.send(error)
        }else{
            res.redirect("/materials")
        }
    })
})

router.get("/:id", async (req, res) => {
   material = await Material.findById(req.params.id) 
        res.render("showmats.ejs", {
            material: material, 
        })   
})

router.delete(".materials/:id", (req, res)=>{
    Material.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect("/materials")
    })
})

router.get('/materials/:id/edit', (req, res)=>{
    Material.findById(req.params.id, (error, material) => { 
        res.render("editmats.ejs", {
    			material: material 
    		})
    })
})
router.put('/materials/:id', (req, res)=>{
    Material.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect("/materials")
    })
})


module.exports = router
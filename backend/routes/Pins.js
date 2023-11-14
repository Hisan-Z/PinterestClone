const express= require('express')

const {CreatePin,getPins, getPin, explorePins, categoryPins, getSlideshow, getSearch, savePin}=require("../controllers/Pins")

const router= express.Router()

router.get("/",getPins)
router.post("/create",CreatePin)
router.get("/:id",getPin)
router.get("/v/explore",explorePins)
router.get("/category/:id",categoryPins)
router.get("/unauth/slideshow",getSlideshow)
router.post("/search/:searchword",getSearch)
router.post("/savepin/:userId/:pinID",savePin)


module.exports=router
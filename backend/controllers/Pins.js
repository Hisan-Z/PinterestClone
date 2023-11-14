require('dotenv').config({ path: '../.env' })

const Pin = require('../models/Pins')
const User= require('../models/User')

const CreatePin = async (req, res) => {
    const { title, description, link, tags, extras, allow_comment, img_source } = req.body
    try {
        const newPin = new Pin({
            title: title,
            description: description,
            link: link,
            img_source: img_source,
            tags: [...new Set(tags)], //to remove duplicates from array of tags
            extras: extras,
            allow_comment: allow_comment,
            comments: []
        })

        await newPin.save()
        return res.status(200).send({
            message: 'Pin Created successfully!',
        })
    } catch (error) {
        res.status(500).send(error)
    }

}

const getPins = async (req, res) => {
    try {
        const pins = await Pin.find().populate(['comments', 'likes']);
        res.status(200).json(pins);
    } catch (err) {
        next(err);
    }
}

const getPin = async (req, res) => {
    try {
        const pin = await Pin.findById(req.params.id).populate(['comments', 'likes'])
        
        res.status(200).json(pin);
    } catch (err) {
    }

}

const explorePins = async (req, res) => {
    try {
        const pins = await Pin.find({ tags: { $in: ['Explorepage'] } }).populate(['comments', 'likes']);
        // const pins=await Pin.find()
        res.status(200).json(pins)
    } catch (err) {
        res.status(500).json(err)
    }
}

const categoryPins = async (req, res) => {
    const pinId = req.params.id
    try {
        const ref = await Pin.findById(pinId)
        const tags = ref.tags.filter((tag) => tag !== 'Explorepage');

        const pins = await Pin.find(
            { tags: { $in: tags } }
        ).populate(['comments', 'likes']);
        const indexToRemove = pins.findIndex((pin) => pin._id.toString() === pinId);

        // If the index is found, remove the pin from the 'pins' array
        if (indexToRemove !== -1) {
            pins.splice(indexToRemove, 1);
        }

        res.status(200).json(pins)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getSlideshow = async (req, res) => {
    const pincat = {
        travel: [],
        fashion: [],
        food: [],
        cats:[]
    }
    const category = ["travel", "fashion", "food","cats"]
    try {
        for (var i of category) {
            const pin = await Pin.find({ tags: { $in: [i] } }).populate(['comments', 'likes'])
            pincat[i] = pin
        }
        res.status(200).json(pincat)
    } catch (err) {
        res.status(500).json({error:err})
    }
}

const getSearch = async (req, res) => {
    const searchkw = req.params.searchword
    try {

        const pin = await Pin.find({
            $or: [
                { title: { $regex: new RegExp(searchkw, "i") } },
                { description: { $regex: new RegExp(searchkw, "i") } },
                { tags: { $in: [searchkw] } }
            ]
        }).populate(['comments','likes'])

        res.status(200).json(pin)
    } catch (err) {
        res.status(500).json({error:err})
    }
}

const savePin = async (req, res) => {
    const userId = req.params.userId;
    const pinId = req.params.pinID;
  
    try {
      // Find the user and pin by their IDs
      const user = await User.findById(userId);
      const pin = await Pin.findById(pinId);
        console.log(user)
        console.log(pin)
      if (!user || !pin) {
        return res.status(404).send('User or pin not found');
      }
  
      // Add the pin to the user's savedPins array
      if (!user.savedPins.includes(pin._id)){

          user.savedPins.push(pin);
          await user.save();
          res.status(200).send('Pin saved successfully');
      }
      else{

          res.status(200).send("Pin already saved")
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving pin');
    }
  };
module.exports = { CreatePin, getPins, getPin, explorePins, categoryPins, getSlideshow, getSearch, savePin }
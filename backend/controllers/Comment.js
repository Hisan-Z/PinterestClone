const Pins = require('../models/Pins')
const Comment = require("../models/Comment.js")

const createComment = async (req,res) => {
   const pinId  = req.params.pinId
   const newReview = new Comment({...req.body}) 
   
   try {
      const savedComment = await newReview.save()

      // after creating a new review now update the comment array of the tour 
      await Pins.findByIdAndUpdate(pinId, {
         $push: {comments: savedComment._id}
      })

      res.status(200).json({success:true, message:"Comment submitted", data:savedComment})
   } catch (error) {
      res.status(500).json({success:false, message:"Failed to submit",data:error})
   }
}

module.exports= {createComment}
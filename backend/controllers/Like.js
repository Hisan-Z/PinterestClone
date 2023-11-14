const Pin = require('../models/Pins')

const AddLike= async (req, res) => {
    const pinId = req.params.id;
    const userId = req.body.userId; // Assuming you have user authentication in place
    try {
      const pin = await Pin.findById(pinId);
      if (!pin) {
        return res.status(404).json({ error: 'Pin not found' });
      }
  
      if (!pin.likes.includes(userId)) {
        // Add the user's ID to the likes array if not already liked
        pin.likes.push(userId);
        await pin.save();
        res.status(200).json({success:true,message:"Liked successfully",data:pin});
      }
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
const RemoveLike= async (req,res)=>{
    const pinId= req.params.id
    const userId=req.body.userId
    try{
        const pin = await Pin.findById(pinId);
  
        if (!pin) {
          return res.status(404).json({ error: 'Pin not found' });
        }
        if (pin.likes.includes(userId)) {
            pin.likes.pop(userId);
            await pin.save();
          }
      
          res.status(200).json({success:true,message:"unLiked successfully",data:pin});
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Server error' });
        }
}
  module.exports={AddLike,RemoveLike}
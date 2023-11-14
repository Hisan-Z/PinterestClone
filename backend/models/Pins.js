const { Schema, model, Types } = require('mongoose')


const userSchema = new Schema(
    {
        title : {
            type: String,
            required:true
        },
        link: String,
        img_source: {
            type: String,
            required:true
        },
        description : String,
        extras: String,
        tags: [String ],
        allow_comment: {
            type:Boolean,
            default: false
        },
        comments:[{
            type: Types.ObjectId,
            ref: "Comment",
          }],
          likes:[{
            type:Types.ObjectId,
            ref:"User"
          }]
    },
    {
        timestamps: true,
    }
)

module.exports = new model('Pins', userSchema)

const { Schema, model, Types } = require('mongoose')

const userSchema = new Schema(
    {
        fname:{ 
            type: String,
            unique: true
        },
        email: String,
        password: String,
        dob: String,
        savedPins: [{ type: Types.ObjectId, ref: 'Pins' }]
    },
    {
        timestamps: true,
    }
)

module.exports = new model('User', userSchema)

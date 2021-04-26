const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    pass: {
        type: String,
        require: true
    },
    email: {
        type: String,
        match: /(.+)@(.+){2,}\.(.+){2,}/i
    },
    images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'images' }]
})
module.exports = mongoose.model('users', UserSchema)
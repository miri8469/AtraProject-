

const mongoose = require('mongoose')
const ImageSchema = mongoose.Schema({

    date: {
        type: Date,
        require: true
    },
    explanation: {
        type: String,
        require: true
    },
    hdurl: {
        type: String
    },
    media_type: {
        type: String,
        require: true
    },
    service_version: {
        type: String
    },
    title: {
        type: String
    },
    url: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users'
    }

})
module.exports = mongoose.model('images', ImageSchema)

const {Schema, model} = require('mongoose')

const schema = new Schema({
    followed: {type: Boolean},
    fullName: {type: String, required: true},
    status: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
    photoUrl: {type: String, required: true}
})

module.exports = model('User', schema)
var mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    phone: {type: String},
    joined: {type: String},
    course: {type: String},
    email: {type: String},
    username: {type: String},
    password: {type: String},
    lname: {type: String},
    fname: {type: String}
})

module.exports = mongoose.model('UserSchema', UserSchema);
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = new schema({
    name :{
        type: String,
        required :true  
    },
    age: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token:{
        type: String
    }

});

module.exports = mongoose.model('user', UserSchema);
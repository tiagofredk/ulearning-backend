const mongoose = require("mongoose")

const newUser = new mongoose.Schema({
    fullname: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    password: {
        type: String,
        
    }
},{
    toJSON:{
        virtuals:true
    }
}
)

module.exports = mongoose.model("users", newUser);
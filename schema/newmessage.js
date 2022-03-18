const mongoose = require("mongoose")

const newMessage = new mongoose.Schema({
    fullname: {
        type: String,
    },
    email: {
        type: String,
    },
    telephone: {
        type: String,
    },
    message: {
        type: String,
    }
},{
    toJSON:{
        virtuals:true
    }
}
)

module.exports = mongoose.model("message", newMessage);
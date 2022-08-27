const mongoose = require("mongoose")

const classes = new mongoose.Schema({
    classname: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
    }
})

module.exports = mongoose.model("classes", classes);
const mongoose = require("mongoose")

const listClasses = new mongoose.Schema({
    classname: String,
    teacher: String
})

userTable = mongoose.model("classes", listClasses);

module.exports = {
    fetchData: function(callback) {
        let list = userTable.find({})
        list.exec(function(err, data) {
            if (err) throw err;
            return callback(data);
        })
    }
}
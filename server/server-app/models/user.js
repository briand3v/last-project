const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// http://mongoosejs.com/docs/schematypes.html
// const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new Schema({
    username: String,
    password: String,
    img: String,
    item: [{
        img: String,

    }]


}, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const User = mongoose.model("User", UserSchema);
module.exports = User;
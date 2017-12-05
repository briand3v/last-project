const User = require('../models/user');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photography');

const user = [{
    username: "brian",
    password: "callofduty"
}
];

User.create(user, (err, user) => {
    if (err) {
        throw (err)
    }
    console.log("Success", user);
    mongoose.connection.close();
})
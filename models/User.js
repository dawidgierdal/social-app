const { model, mongoose } = require('mongoose');
const Scheme = mongoose.Schema;

const userScheme = new Scheme({
    username: String,
    password: String,
    email: String,
    createdAt: String,
})

module.exports = model('User', userScheme);
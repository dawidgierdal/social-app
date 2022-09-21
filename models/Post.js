const { model, mongoose } = require('mongoose');
const Scheme = mongoose.Schema;

const postScheme = new Scheme({
    body: String,
    username: String,
    createdAt: String,
    comments: [{
        body: String,
        username: String,
        createdAt: String,
    }],
    likes: [{
        username: String,
        createdAt: String,
    }],
    user: {
        type: Scheme.Types.ObjectId,
        refs: 'users',
    }
})

module.exports = model('Post', postScheme);
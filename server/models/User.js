const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    clubs: [{ type: Schema.Types.ObjectId, ref: 'Club' }]
    // able to handle multiple clubs -- why "clubs: { type..."
});

const User = model('User', userSchema);
module.exports = User;
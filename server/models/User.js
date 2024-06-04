const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    clubs: [{ type: Schema.Types.ObjectId, ref: 'Club' }]
});

// Pre-save middleware to hash the password before saving the user 🐙 to do : make sure this really is working!
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// Method to compare the input password with the hashed password  🐙 to do :  make sure this is really working
userSchema.methods.isCorrectPassword = async function(password) {
    console.log("enter password", password);
    console.log("database password", this.password)
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);
module.exports = User;

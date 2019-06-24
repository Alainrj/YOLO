const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;


//We are using JWT and Crypto to generate hash and salt from the received password string. 
//This will later be used to validate the user.

const UserSchema = new Schema ({
    fistName: String,
    lastName: String,
    email: String,
    hash: String,
    salt: String,
    age: String,
    heightFeet: String,
    heightInch: String,
    weight: String,
});

UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this;
};

UserSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJWT = function() {
    const today = new Date ();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
    
}

UserSchema.methods.toAuthJSON = function () {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        _id: this._id,
        email: this.email,
        age: this.age,
        heightFeet: this.heightFeet,
        heightInch: this.heightInch,
        weight: this.weight,
        // token: this.generateJWT(),
    };
};

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;

var mongoose = require('mongoose');
var passwordHash = require('password-hash');
var Schema = mongoose.Schema;
const saltRounds = 10;

var userSchema = new Schema({
    username: { type: String },
    password: { type: String },
    email: { type: String }
});

var create = mongoose.model('Users', userSchema);

var encryptPassword = function(password) {
    
    return passwordHash.generate(password);
    
};

var comparePassword = function(password, hashedPassword) {
    
    return passwordHash.verify(password, hashedPassword)
    
};

module.exports.create = create;
module.exports.encryptPassword = encryptPassword;
module.exports.comparePassword = comparePassword;

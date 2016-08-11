var Users = require('../models/userModel');

module.exports = function(app) {
    
    // To create a user
    app.post('/signup', function(req, res) {
        
        var newUser = Users.create({
            username: req.body.username,
            password: Users.encryptPassword(req.body.password),
            email: req.body.email
        });
        
        newUser.save(function(err) {
            if(err) throw err;
            
            res.send({
                success: true,
                data: null 
            });
        });
        
    });
    
    // Log user
    app.post('/login', function(req, res) {
        Users.create.findOne({ email: req.body.email }, function(err, user) {
            
            if(err) throw err;
            
            if(Users.comparePassword(req.body.password, user.password)) {
                
                console.log(user);
                res.send({
                    success: true,
                    data: user 
                });
                
            }
            else {
                
                res.send({
                    success: false,
                    data: null 
                });
                
            }
        });
    });
    
    // Show information of the user
    /* app.get('/user/:id', function(req, res) {
        
        Users.findById({ _id: req.params.id }, function(err, user) {
            if(err) throw err;
            
            res.send({
                success: true,
                data: user 
            });
        });
        
    }); */
    
    // Modify the user
    /* app.post('/user/:id', function(req, res) {
        
        if(req.body.id) {
            Users.findByIdAndUpdate(req.body.id, { username: req.body.username, password: req.body.password }, function(err, user) {
                if(err) throw err;
            
                res.send({
                    success: true,
                    data: null 
                });
            });
        }
        
    }); */
    
    
    
    
}
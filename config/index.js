var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds019481.mlab.com:19481/test-login';
    }
}
// server/config.js
module.exports = {
    AUTH0_DOMAIN: 'fredwong-it.auth0.com', // e.g., kmaida.auth0.com
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
    //MONGO_URI: process.env.MONGO_URI || 'mongodb://admin:admin@ds125198.mlab.com:25198/mean'
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/mean',
    NAMESPACE: 'http://myapp.com/roles'
  };
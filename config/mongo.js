module.exports = {
    development: {
      url: 'mongodb://localhost:27017/',
      database: 'contests'
    },
    production: {
      url: process.env.MONGODB_URI,
      database: process.env.MONGODB_DATABASE_NAME
    }
};
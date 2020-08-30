 
module.exports = {
    development: {
      database: 'contests'
    },
    production: {
      database: process.env.PG_DATABASE_NAME,
      user: process.env.PG_DATABASE_USERNAME,
      host: process.env.PG_DATABASE_HOST,
      password: process.env.PG_DATABASE_PASSWORD,
      port: process.env.PG_DATABASE_PORT
    }
};
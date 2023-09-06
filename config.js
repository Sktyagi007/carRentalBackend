const dotenv = require("dotenv").config();

module.exports = {
    port: process.env.SERVER_PORT,
    connURL: process.env.MONGO_URL,
    dbn: process.env.MONGO_DBNAME
}
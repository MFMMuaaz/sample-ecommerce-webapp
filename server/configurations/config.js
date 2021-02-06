const databaseConfig = {
    host: "localhost",
    database: "online_store",
    user: "root",
    password: "123"
}

const port = process.env.PORT || 3000;

module.exports = { databaseConfig: databaseConfig, port: port }
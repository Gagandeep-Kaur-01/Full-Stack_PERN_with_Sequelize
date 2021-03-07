module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "super1234",
    DB: "pern_s",
    dialect: "postgres",
    pool: {
        max: 5, // maximum number of connection in pool
        min: 0, // minimum number of connection in pool
        acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
        idle: 10000 // maximum time, in milliseconds, that a connection can be idle before being released
    }
};
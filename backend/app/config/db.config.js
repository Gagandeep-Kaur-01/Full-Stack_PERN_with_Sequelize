module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "super1234",
    DB: "pern_s",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
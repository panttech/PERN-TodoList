const Pool = require("pg").Pool;

const pool = new Pool({
    user: "Eresghikal",
    password: "bnisthebest11",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;
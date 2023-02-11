const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'univ',
    password: 'Mahadev1/0',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}
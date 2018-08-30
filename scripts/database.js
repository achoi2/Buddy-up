const pg = require('pg-promise')();
const dbConfig = 'postgres://apple@localhost:5432/meetup';
const db = pg(dbConfig);

module.exports = db;
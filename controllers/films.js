const { Pool } = require('pg');
const dbConfig = require('../dbConfig');

const pool = new Pool(dbConfig.postgresConfig);

module.exports = {
  getAllFilms: async () => {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM films');
      return result.rows;
    } finally {
      client.release();
    }
  },

  getFilmById: async (filmId) => {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM films WHERE id = $1', [filmId]);
      return result.rows[0];
    } finally {
      client.release();
    }
  },

  createFilm: async (filmData) => {
    const client = await pool.connect();
    try {
      const { title, director, release_date } = filmData;
      const result = await client.query(
        'INSERT INTO films (title, director, release_date) VALUES ($1, $2, $3) RETURNING *',
        [title, director, release_date]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  },

  updateFilm: async (filmId, updatedFilmData) => {
    const client = await pool.connect();
    try {
      const { title, director, release_date } = updatedFilmData;
      const result = await client.query(
        'UPDATE films SET title = $1, director = $2, release_date = $3 WHERE id = $4 RETURNING *',
        [title, director, release_date, filmId]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  },

  deleteFilm: async (filmId) => {
    const client = await pool.connect();
    try {
      const result = await client.query('DELETE FROM films WHERE id = $1 RETURNING *', [filmId]);
      return result.rowCount > 0; // Returns true if at least one row was deleted
    } finally {
      client.release();
    }
  },
};
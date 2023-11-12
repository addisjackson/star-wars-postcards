const { Pool } = require('pg');
const dbConfig = require('../dbConfig');

const pool = new Pool(dbConfig.postgresConfig);

module.exports = {
  getAllPlanets: async () => {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM planets');
      return result.rows;
    } finally {
      client.release();
    }
  },

  getPlanetById: async (planetId) => {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM planets WHERE id = $1', [planetId]);
      return result.rows[0];
    } finally {
      client.release();
    }
  },

  createPlanet: async (planetData) => {
    const client = await pool.connect();
    try {
      const { name, climate, inhabitants } = planetData;
      const result = await client.query(
        'INSERT INTO planets (name, climate, inhabitants) VALUES ($1, $2, $3) RETURNING *',
        [name, climate, inhabitants]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  },

  updatePlanet: async (planetId, updatedPlanetData) => {
    const client = await pool.connect();
    try {
      const { name, climate, inhabitants } = updatedPlanetData;
      const result = await client.query(
        'UPDATE planets SET name = $1, climate = $2, inhabitants = $3 WHERE id = $4 RETURNING *',
        [name, climate, inhabitants, planetId]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  },

  deletePlanet: async (planetId) => {
    const client = await pool.connect();
    try {
      const result = await client.query('DELETE FROM planets WHERE id = $1 RETURNING *', [planetId]);
      return result.rowCount > 0; // Returns true if at least one row was deleted
    } finally {
      client.release();
    }
  },
};

const pool = require('../db/dbConfig');

module.exports = {

  getAllPlanets: async () => {
    try {
      const result = await pool.query('SELECT * FROM planets');
      return result.rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getPlanetById: async (planetId) => {
    try {
      const result = await pool.query('SELECT * FROM planets WHERE id = $1', [planetId]);
      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  createPlanet: async (newPlanetData) => {
    try {
      const { name, climate, temperature, terrain, diameter, population, residents, species, films, synopsis } = req.body;
      const newPlanetData = req.body
      const result = await pool.query(
        'INSERT INTO planets (name, climate, temperature, terrain, diameter, population, residents, species, films, synopsis) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
        [name, climate, temperature, terrain, diameter, population, residents, species, films, synopsis]
      );
      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  updatePlanet: async (planetId, updatedPlanetData) => {
    try {
      const { name, climate, temperature, terrain, diameter, population, residents, species, films, synopsis } = updatedPlanetData;
      const result = await pool.query(
        'UPDATE planets SET name = $1, climate = $2, temperature = $3, terrain = $4, diameter = $5, population = $6, residents = $7, species = $8, films = $9, synopsis = $10 WHERE id = $11 RETURNING *',
        [name, climate, temperature, terrain, diameter, population, residents, species, films, synopsis, planetId]
      );
      return result.rows[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deletePlanet: async (planetId) => {
    try {
      const result = await pool.query('DELETE FROM planets WHERE id = $1 RETURNING *', [planetId]);
      return result.rowCount > 0; // Returns true if at least one row was deleted
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

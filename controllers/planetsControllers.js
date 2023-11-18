const pool = require("../db/dbConfig.js");

const getAllPlanets = async () => {
  try {
    const allPlanets = await pool.any("SELECT * FROM planets");
    return allPlanets;
  } catch (err) {
    return err;
  }
};

const getPlanet = async (id) => {
  try {

    const onePlanet = await pool.one("SELECT * FROM planets WHERE id=$1", id);
    return onePlanet;
  } catch (error) {

    return error;
  }
};

const createPlanet = async (planet) => {
  const { name, diameter, climate, temperature, terrain, population, residents, species, films, synopsis } = planet;
  try {
    const newPlanet = await pool.one(
      "INSERT INTO planets ([ name, diameter, climate, temperature, terrain, population, residents, species, films, synopsis ]) VALUES ($1, $2, $3, $4, $5), $5, $6, $7, $8, $9, $10 RETURNING *",
      [name, diameter, climate, temperature, terrain, population, residents, species, films, synopsis ]
    );
    return newPlanet;
  } catch (error) {
    console.error(error);
      throw new Error("Failed to create planet in the database");
  }
};

  
const deletePlanet = async (id) => {
  try {
    const deletedPlanet = await pool.one("DELETE FROM planets WHERE id = $1 RETURNING *", id);
    return deletedPlanet;
  } catch (err) {
    return err;
  }
};

const updatePlanet = async (planet, id) => {
  const { name, diameter, climate, temperature, terrain, population, residents, species, films, synopsis } = planet;
  try {
  
    const updatedPlanet = await pool.one("UPDATE planets SET name = $1, diameter = $2, climate = $3, temperature = $4, terrain = $5, population = $6, residents = $7, species = $8, films = $9, synopsis = $10 WHERE id = $11 RETURNING *",

    [name, diameter, climate, temperature, terrain, population, residents, species, films, synopsis ]);
    return updatedPlanet;
  } catch (err) {
    return err;
  }
}

module.exports = { 
  getAllPlanets, 
  getPlanet, 
  createPlanet, 
  deletePlanet,
  updatePlanet
};

const db = require("../db/dbConfig");

const getAllPlanets = async () => {
  try {
   const allPlanets = await db.any("SELECT * FROM planets");
   return allPlanets;
  } catch(err) {
    return err
  } 
};

const getPlanet = async (id) => {
    try {
        const onePlanet = await db.one("SELECT * FROM planets WHERE id=$1", id);
        return onePlanet;
    } catch (error) {
        return error;
    }
}

const createPlanet = async (planet) => {
    const { name, diameter, climate, temperature, terrain, population, residents, species, films, synopsis } = planet;
    try {
      const newPlanet = await db.one(
        "INSERT INTO planets (name, diameter, climate, temperature, terrain, population, residents, species, films, synopsis) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [planet.name, planet.diameter, planet.climate, planet.temperature, planet.terrain, planet.population, planet.residents, planet.species, planet.films, planet.synopsis]
      );
    return newPlanet;
} catch (error) {
    return error;
}

}

const deletePlanet = async (id) => {
try {
    const deletedPlanet = await db.one("DELETE FROM planets WHERE id = $1 RETURNING *", id)
    return deletedPlanet;

} catch (err) {
 return err
}
};

const updatePlanet = async (planet, id) => {
    const { name, diameter, climate, temperature, terrain, population, residents, species, films, synopsis } = planet;
    try {
      const updatedPlanet = await db.one(
        'UPDATE planets SET name = $1, diameter = $2, climate = $3, temperature = $4, terrain = $5, population = $6, residents = $7, species = $8, films = $9, synopsis = $10, WHERE id = $11 RETURNING *',
        [name, diameter, climate, temperature, terrain, population, residents, species, films, synopsis, id]
      );
    return updatedPlanet;
} catch (err) {
    return err;
}
};




module.exports = { getAllPlanets, getPlanet, createPlanet, deletePlanet, updatePlanet }
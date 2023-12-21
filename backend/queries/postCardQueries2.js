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
    const { image_url, location, price, quantity, synopsis, films, url } = planet;
    try {
      const newPlanet = await db.one(
        "INSERT INTO planets (image_url, location, price, quantity, synopsis, films, url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [planet.image_url, planet.location, planet.price, planet.quantity, planet.synopsis, planet.films, planet.url]
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
    const { image_url, location, price, quantity, synopsis, films, url } = planet;
    try {
      const updatedPlanet = await db.one(
        'UPDATE planets SET image_url = $1, location = $2, price = $3, quantity = $4, synopsis = $5, films = $6, url = $7 WHERE id = $8 RETURNING *',
        [image_url, location, price, quantity, synopsis, films, url, id]
      );
    return updatedPlanet;
} catch (err) {
    return err;
}
};




module.exports = { getAllPlanets, getPlanet, createPlanet, deletePlanet, updatePlanet }
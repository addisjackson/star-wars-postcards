const express = require("express");
const planets = express.Router();

const {
  getAllPlanets,
  getPlanet,
  createPlanet,
  deletePlanet,
  updatePlanet
} = require("../controllers/planetsControllers.js");
const { checkName, checkTemperature, checkPopulation, checkFilms, checkResidents, checkSpecies, validateJSONKeys } = require("../validations/checkPostCards")
// Extends our app so that we can create a new route for our planetS resource
// we need to make this ASYNC as well


planets.get("/", async (req, res) => {
  const allPlanets = await getAllPlanets();
  if (allPlanets[0]) {
    // if there is one index that gets returned then the data exists - John P 8/2/2022
    // an empty array is TRUTHY - so we need to check for an element
    res.status(200).json(allPlanets);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

planets.get("/:id", async (req, res) => {
  const { id } = req.params;
  const planet = await getPlanet(id);
  if (planet) {
    res.json(planet);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

planets.post("/", checkName, checkTemperature, checkPopulation, checkFilms, checkResidents, checkSpecies, validateJSONKeys, async (req, res) => {
  try {
    const planet = await createPlanet(req.body);
    res.json(planet)
  } catch (error) {
    return error;
  }
});

planets.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPlanet = await deletePlanet(id);
  // if our response has an ID we are good to go!
  // an error will NOT have an id
  if (deletedPlanet.id) {
    res.status(200).json(deletedPlanet)
  } else {
    res.status(404).json("planet not found!");
  }
});

planets.put("/:id", checkName, checkTemperature, checkPopulation, checkFilms, checkResidents, checkSpecies, validateJSONKeys, async (req, res) => {
  const { id } = req.params;
  // updatedPlanet will either be a MASSIVE error object from SQL
  // OR it will be a planet with the keys and values we expected
  const updatedPlanet = await updatePlanet(req.body, id);
  if (updatedPlanet.id) {
    res.status(200).json(updatedPlanet);
  } else {
    res.status(404).json({error: "planet not updated for some reason...."});
  }
})

module.exports = planets;
// EXPORT our planets Router

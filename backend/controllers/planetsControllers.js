const express = require("express");
const planets = express.Router();

const {
  getAllPlanets,
  getPlanet,
  createPlanet,
  deletePlanet,
  updatePlanet
} = require("../queries/planets.js");
const {  checkName, checkTemperature, checkPopulation, checkResidents, checkSpecies, checkFilms, validateJSONKeys } = require("../validations/checkPostcards.js");

planets.get("/", async (req, res) => {
  const allPlanets = await getAllPlanets();
  if (allPlanets[0]) {
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

planets.post("/", [checkName, checkTemperature, checkPopulation, checkResidents, checkSpecies, checkFilms, validateJSONKeys], async (req, res) => {
  try {
    const planet = await createPlanet(req.body);
    res.json(planet);
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
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
    res.status(404).json("Planet not found!");
  }
});

planets.put("/:id",  checkName, checkTemperature, checkPopulation, checkResidents, checkSpecies, checkFilms, validateJSONKeys, async (req, res) => {
  const { id } = req.params;
  const updatedPlanet = await updatePlanet(req.body, id);
  if (updatedPlanet.id) {
    res.status(200).json(updatedPlanet);
  } else {
    res.status(404).json({error: "Planet not updated."});
  }
})

module.exports = planets;
// EXPORT our Planets Router

const express = require("express");
const planets = express.Router();

const {
  getAllPlanets,
  getPlanet,
  createPlanet,
  deletePlanet,
  updatePlanet
} = require("../queries/planetQueries.js");

const {
  checkName,
  checkTemperature,
  checkPopulation,
  validateJSONKeys,
  checkResidents,
  checkSpecies,
  checkFilms
} = require("../validations/checkPostCards.js");


// Routes for fetching all planets and getting a specific planet by ID
planets.get("/", async (req, res) => {
    const allPlanets = await getAllPlanets();
    if (allPlanets[0]) {
      res.status(200).json({success: true, data: {payload: allPlanets} })
    } else {
      res.status(500).json({ success: false, data: { error: "Server error did not get data!"} });
    }
  } )
  

  planets.get("/:id", async (req, res) => {
      const { id } = req.params;
      const planet = await getPlanet(id);
      if (planet) {
        res.json(planet);
      } else {
        res.status(404).json({ error: "Planet not found" });
      }
    } )


// Routes for creating, updating, and deleting planets
planets.post("/", checkName, checkTemperature, checkPopulation, validateJSONKeys, checkResidents, checkSpecies, checkFilms, async (req, res) => {
    const { name, diameter, climate, temperature, terrain, population, residents, species, films, synopsis } =  planetData;
    const planetData = req.body;

    if (!req.body) {
      res.status(400).json({ error: "Request body is empty" });
    }

    const newPlanet = await createPlanet(planetData);

    if (!newPlanet) {
      res.status(400).json({ error: "Planet not created" });
    }

    // Assuming createPlanet() returns the newly created planet
    res.status(201).json(newPlanet);
  })


planets.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlanet = await deletePlanet(id);
    if (deletedPlanet.id) {
      res.status(200).json(deletedPlanet);
    } else {
      res.status(404).json("Planet not found!");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error!" });
  }
});

planets.put("/:id", checkName, checkTemperature, checkPopulation, validateJSONKeys, checkResidents, checkSpecies, checkFilms, async (req, res) => {
  try {
    const { name, diameter, climate, temperature, terrain, population, residents, species, films, synopsis } =  planetData;
    const planetData = req.body;
    const { id } = req.params;
    const updatedPlanet = await updatePlanet(req.body, id);
    if (updatedPlanet.id) {
      res.status(200).json(updatedPlanet);
    } else {
      res.status(404).json({ error: "Planet not updated" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error!" });
  }
});

module.exports = planets;

const express = require("express");
const planets = express.Router();

const {
  getAllPlanets,
  getPlanet,
  createPlanet,
  deletePlanet,
  updatePlanet
} = require("../controllers/planetsControllers.js");

const { checkName, checkTemperature, checkPopulation, checkResidents, checkSpecies, checkFilms, validateJSONKeys } = require("../validations/checkPostCards"); // Import appropriate validation functions for planets

// Routes for fetching all planets and getting a specific planet by ID
planets.get("/", async (req, res) => {
  try {
    const allPlanets = await getAllPlanets();
    if (allPlanets[0]) {
      res.status(200).json(allPlanets);
    } else {
      res.status(500).json({ error: "Server error!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error!" });
  }
});

planets.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const planet = await getPlanet(id);
    if (planet) {
      res.json(planet);
    } else {
      res.status(404).json({ error: "Planet not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error!" });
  }
});

// Routes for creating, updating, and deleting planets
planets.post("/", checkName, checkTemperature, checkPopulation, checkResidents, checkSpecies, checkFilms, validateJSONKeys, async (req, res) => {
  try {
    const planetsData = req.body;

    if (!req.body) {
      res.status(400).json({ error: "Request body is empty" });
    }

    const newPlanet = await createPlanet(planetsData);

    if (!newPlanet) {
      res.status(400).json({ error: "Planet not created" });
    }

    // Assuming createPlanet() returns the newly created planet
    res.status(201).json(newPlanet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error!" });
  }
});



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

planets.put("/:id", checkName, checkTemperature, checkPopulation, checkResidents, checkSpecies, checkFilms, validateJSONKeys, async (req, res) => {
  try {
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

const express = require('express');
const router = express.Router();
const planetQueries = require('./planetQueries'); // Import your planet queries module

// Route to get all planets
router.get('/planets', async (req, res) => {
  try {
    const planets = await planetQueries.getAllPlanets();
    res.json(planets);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching planets.' });
  }
});

// Route to get a specific planet by ID
router.get('/planets/:planetId', async (req, res) => {
  const planetId = req.params.planetId;
  try {
    const planet = await planetQueries.getPlanetById(planetId);
    if (!planet) {
      res.status(404).json({ error: 'Planet not found' });
    } else {
      res.json(planet);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the planet.' });
  }
});

// Route to create a new planet
router.post('/planets', async (req, res) => {
  const newPlanetData = req.body; // Assumes you send planet data in the request body
  try {
    const createdPlanet = await planetQueries.createPlanet(newPlanetData);
    res.status(201).json(createdPlanet);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating a planet.' });
  }
});

// Route to update a planet by ID
router.put('/planets/:planetId', async (req, res) => {
  const planetId = req.params.planetId;
  const updatedPlanetData = req.body; // Assumes you send updated planet data in the request body
  try {
    const updatedPlanet = await planetQueries.updatePlanet(planetId, updatedPlanetData);
    if (!updatedPlanet) {
      res.status(404).json({ error: 'Planet not found' });
    } else {
      res.json(updatedPlanet);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the planet.' });
  }
});

// Route to delete a planet by ID
router.delete('/planets/:planetId', async (req, res) => {
  const planetId = req.params.planetId;
  try {
    const deleted = await planetQueries.deletePlanet(planetId);
    if (!deleted) {
      res.status(404).json({ error: 'Planet not found' });
    } else {
      res.json({ message: 'Planet deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the planet.' });
  }
});

module.exports = router;

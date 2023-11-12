const express = require('express');
const router = express.Router();
const filmQueries = require('./filmQueries'); // Import your film queries module

// Route to get all films
router.get('/films', async (req, res) => {
  try {
    const films = await filmQueries.getAllFilms();
    res.json(films);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching films.' });
  }
});

// Route to get a specific film by ID
router.get('/films/:filmId', async (req, res) => {
  const filmId = req.params.filmId;
  try {
    const film = await filmQueries.getFilmById(filmId);
    if (!film) {
      res.status(404).json({ error: 'Film not found' });
    } else {
      res.json(film);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the film.' });
  }
});

// Route to create a new film
router.post('/films', async (req, res) => {
  const newFilmData = req.body; // Assumes you send film data in the request body
  try {
    const createdFilm = await filmQueries.createFilm(newFilmData);
    res.status(201).json(createdFilm);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating a film.' });
  }
});

// Route to update a film by ID
router.put('/films/:filmId', async (req, res) => {
  const filmId = req.params.filmId;
  const updatedFilmData = req.body; // Assumes you send updated film data in the request body
  try {
    const updatedFilm = await filmQueries.updateFilm(filmId, updatedFilmData);
    if (!updatedFilm) {
      res.status(404).json({ error: 'Film not found' });
    } else {
      res.json(updatedFilm);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the film.' });
  }
});

// Route to delete a film by ID
router.delete('/films/:filmId', async (req, res) => {
  const filmId = req.params.filmId;
  try {
    const deleted = await filmQueries.deleteFilm(filmId);
    if (!deleted) {
      res.status(404).json({ error: 'Film not found' });
    } else {
      res.json({ message: 'Film deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the film.' });
  }
});

module.exports = router;

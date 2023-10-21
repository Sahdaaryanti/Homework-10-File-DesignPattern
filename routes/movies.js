const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movies');
const upload = require('../middleware/multer');

router.post('/create', upload.single('photo'), MovieController.createMovie);
router.get('/', MovieController.getMovies);
router.get('/view', MovieController.getMoviesView);
router.get('/:id', MovieController.getMovieById);
router.put('/:id', upload.single('photo'), MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);

module.exports = router;

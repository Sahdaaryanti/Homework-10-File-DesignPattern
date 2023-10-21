const MovieRepository = require('../repositories/movies');

class MovieController {
    async createMovie(req, res) {
        const { title, genres, year } = req.body;
        const photo = req.file.path;
        try {
            const newMovie = await MovieRepository.createMovie({ title, genres, year, photo });
            res.status(201).json({message: 'Film berhasil dibuat!', movie: newMovie});
        } catch (error) {
            console.error(error.message);
            res.status(400).json({ error: error.message });
        }
    }

    async getMovies(req, res) {
        try {
            const movies = await MovieRepository.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getMovieById(req, res) {
        const { id } = req.params;
        try {
            const movie = await MovieRepository.getMovieById(id);
            if (movie) {
            res.status(200).json(movie);
            } else {
            res.status(404).json({ error: 'Film tidak ditemukan!' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateMovie(req, res) {
        const { id } = req.params;
        const { title, genres, year } = req.body;
        const photo = req.file ? req.file.path: null;
        try {
            const updatedMovie = await MovieRepository.updateMovie({ id, title, genres, year, photo });
            res.status(200).json({message: 'Film berhasil diupdate', movie: updatedMovie});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteMovie(req, res) {
        const { id } = req.params;
        try {
            const deletedMovie = await MovieRepository.deleteMovie(id);
            if (deletedMovie) {
            res.status(200).json({message: 'Film erhasil dihapus!'});
            } else {
            res.status(404).json({ error: 'Film tidak ditemukan!' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    async getMoviesView(req, res) {
        try {
          const movies = await MovieRepository.getMovies();
          res.render('movies', { movies });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }  
}

module.exports = new MovieController();

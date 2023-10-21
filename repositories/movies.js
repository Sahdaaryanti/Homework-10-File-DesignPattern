const MovieModel = require('../models/movies');

class MovieRepository {
    async createMovie({ title, genres, year, photo }) {
        return MovieModel.createMovie({ title, genres, year, photo });
    }

    async getMovies() {
        return MovieModel.getMovies();
    }

    async getMovieById(id) {
        return MovieModel.getMovieById(id);
    }

    async updateMovie({ id, title, genres, year, photo }) {
        return MovieModel.updateMovie({ id, title, genres, year, photo });
    }

    async deleteMovie(id) {
        return MovieModel.deleteMovie(id);
    }
}

module.exports = new MovieRepository();

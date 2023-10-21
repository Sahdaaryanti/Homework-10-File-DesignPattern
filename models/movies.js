const db = require('../config/dbConfig');

class MovieModel {
    async createMovie({ title, genres, year, photo }) {
        try {
            const query = 'INSERT INTO movies (title, genres, year, photo) VALUES ($1, $2, $3, $4) RETURNING *';
            const values = [title, genres, year, photo];

            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async getMovies() {
        const query = 'SELECT * FROM movies';
        try {
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    async getMovieById(id) {
        const query = 'SELECT * FROM movies WHERE id = $1';
        try {
            const result = await db.query(query, [id]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async updateMovie({ id, title, genres, year, photo }) {
        const query = 'UPDATE movies SET title = $2, genres = $3, year = $4, photo = $5 WHERE id = $1 RETURNING *';
        const values = [id, title, genres, year, photo];
        try {
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async deleteMovie(id) {
        const query = 'DELETE FROM movies WHERE id = $1 RETURNING *';
        try {
            const result = await db.query(query, [id]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new MovieModel();

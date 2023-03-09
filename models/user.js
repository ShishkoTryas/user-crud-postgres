import pkg from 'pg';
const { Pool } = pkg;
import {user, host, database, password, port} from "../config/env.js"

const pool = new Pool({
    user: user,
    host: host,
    database: database,
    password: password,
    port: port,
})

class User {
    static async allUsers() {
        const { rows } = await pool.query('SELECT * FROM users');
        return rows;
    }

    static async createUser(name, email) {
        const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING name, email', [name, email] )
        return rows
    }

    static async userId(id) {
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return rows;
    }

    static async update(id, name, email) {
        const { rows } = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING name, email, id', [name, email, id]);
        return rows;
    }

    static async delete(id) {
        const { rows } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING id', [id]);
        return rows;
    }
}

export { User }
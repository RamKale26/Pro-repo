require("dotenv").config();
let mysql = require("mysql2");

// Support both lowercase and uppercase env names
const DB_HOST = process.env.db_host || process.env.DB_HOST || "localhost";
const DB_USER = process.env.db_user || process.env.DB_USER || "root";
const DB_PASS = process.env.db_password || process.env.DB_PASSWORD || "";
const DB_NAME = process.env.db_name || process.env.DB_NAME || "test";

// Use a pooled connection for stability
const pool = mysql.createPool({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASS,
	database: DB_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

// Probe once on startup for clearer logs
pool.getConnection((err, connection) => {
	if (err) {
		console.error("Database Not Connected:", err.message);
		return;
	}
	connection.ping((pingErr) => {
		if (pingErr) {
			console.error("Database Ping Failed:", pingErr.message);
		} else {
			console.log("Database Connected Successfully...");
		}
		connection.release();
	});
});

module.exports = pool;
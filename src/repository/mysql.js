import mysql from "mysql2/promise";

async function connectDB() {
    return await mysql.createConnection({
        "user":"root",
        "password":"",
        "host":"localhost",
        "port":3307,
        "database":"cinetec2024"
    })
}

export default {connectDB};
import database from '../repository/mysql.js'

async function createDirector(name, nationality, birthday, sex) {
    const sql = "INSERT INTO tbl_diretor(nome_diretor, nacionalidade, dt_nascimento, sexo) VALUES (?,?,?,?)";

    const bdInfo = [name, nationality, birthday, sex];

    const conn = await database.connectDB();
    await conn.query(sql, bdInfo);
    conn.end();
}

export default {createDirector};
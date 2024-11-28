import database from "../repository/mysql.js";

//GET

async function listDirector() {
  const sql = "SELECT * FROM tbl_diretor WHERE deletado = 0";

  const conn = await database.connectDB();
  const [rows] = await conn.query(sql);
  conn.end();
  return rows;
}

//POST

async function createDirector(name, nationality, birthDay, gender) {
  const sql =
    "INSERT INTO tbl_diretor(nome_diretor, nacionalidade, dt_nascimento, sexo) VALUES (?,?,?,?)";

  const bdInfo = [name, nationality, birthDay, gender];

  const conn = await database.connectDB();
  await conn.query(sql, bdInfo);
  conn.end();
}

//UPDATE

async function updateDirector(name, nationality, birthDay, gender, idDirector) {
  const sql =
    "UPDATE tbl_diretor SET nome_diretor = ?, nacionalidade = ?, dt_nascimento = ?, sexo = ? WHERE id_diretor = ?";

  const bdInfo = [name, nationality, birthDay, gender, idDirector];

  const conn = await database.connectDB();
  await conn.query(sql, bdInfo);
  conn.end();
}

//DELETE

async function deleteDirector(idDirector) {
  const sql = "UPDATE tbl_diretor SET deletado = 1 WHERE id_diretor = ?";

  const conn = await database.connectDB();
  await conn.query(sql, idDirector);
  conn.end();
}

export default { createDirector, listDirector, updateDirector, deleteDirector };

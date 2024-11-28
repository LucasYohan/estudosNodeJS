import database from "../repository/mysql.js";

//GET

async function listActor() {
  const sql = "SELECT * FROM tbl_ator WHERE deletado = 0";

  const conn = await database.connectDB();
  const [rows] = await conn.query(sql);
  conn.end();
  return rows;
}

//POST

async function createActor(name, gender, birthDay) {
  const sql =
    "INSERT INTO tbl_ator(nome_ator, sexo, dt_nascimento) VALUES (?,?,?)";

  const bdInfo = [name, gender, birthDay];

  const conn = await database.connectDB();
  await conn.query(sql, bdInfo);
  conn.end();
}

//UPDATE

async function updateActor(name, gender, birthDay, idActor) {
  const sql =
    "UPDATE tbl_ator SET nome_ator = ?, sexo = ?, dt_nascimento = ? WHERE id_ator = ?";

  const bdInfo = [name, gender, birthDay, idActor];

  const conn = await database.connectDB();
  await conn.query(sql, bdInfo);
  conn.end();
}

//DELETE

async function deleteActor(idActor) {
  const sql = "UPDATE tbl_ator SET deletado = 1 WHERE id_ator = ?";

  const conn = await database.connectDB();
  await conn.query(sql, idActor);
  conn.end();
}

export default { createActor, listActor, updateActor, deleteActor };

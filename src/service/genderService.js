import database from "../repository/mysql.js";

//GET

async function listGenders() {
  const sql = "SELECT * FROM tbl_genero WHERE deletado = 0";

  const conn = await database.connectDB();
  const [rows] = await conn.query(sql);
  conn.end();
  return rows;
}

//POST

async function createGender(gender) {
  const sql = "INSERT INTO tbl_genero(genero) VALUES (?)";

  const bdInfo = [gender];

  const conn = await database.connectDB();
  await conn.query(sql, bdInfo);
  conn.end();
}

//UPDATE

async function updateGender(gender, idGender) {
  const sql = "UPDATE tbl_genero SET genero = ? WHERE id_genero = ?";

  const bdInfo = [gender, idGender];

  const conn = await database.connectDB();
  await conn.query(sql, bdInfo);
  conn.end();
}

//DELETE

async function deleteGeder(idGender) {
  const sql = "UPDATE tbl_genero SET deletado = 1 WHERE id_genero = ?";

  const conn = await database.connectDB();
  await conn.query(sql, idGender);
  conn.end();
}

export default { createGender, listGenders, updateGender, deleteGeder };

//用來發起對資料庫連接池的需求
const { Pool } = require("pg"); // pg為postSQL
const databaseConfiguratoin = require("./secrets/databaseConfiguration"); //資料庫配置
const pool = new Pool(databaseConfiguratoin);

module.exports = pool;

//測試是否能正常運作
// pool.query("SELECT * FROM generation", (error, response) => {
//   if (error) return console.log("error", error);

//   console.log("response.rows", response.rows);
// });

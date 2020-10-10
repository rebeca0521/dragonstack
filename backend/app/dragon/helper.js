/* 用來找某個dragonId的traits，再把某個dragonId的資料都顯示出來 */

const pool = require("../../databasePool");
const DragonTable = require("./table");
const Dragon = require("./index");

const getDragonWithTraits = ({ dragonId }) => {
  return (
    Promise.all([
      DragonTable.getDragon({ dragonId }),
      new Promise((resolve, reject) => {
        pool.query(
          `SELECT "traitType","traitValue"
        FROM trait
        INNER JOIN dragonTrait ON trait.id = dragonTrait."traitId"
        WHERE dragonTrait."dragonId" = $1`,
          [dragonId],
          (error, response) => {
            if (error) return reject(error);

            resolve(response.rows);
          }
        );
      }),
    ])
      // .then(([result, result1, result2]) => {
      //   console.log(result);
      // })
      .then(([dragon, dragonTraits]) => {
        return new Dragon({ ...dragon, dragonId, traits: dragonTraits });
      })
      .catch((error) => console.error(error))
  );
};

// 測試用;
// getDragonWithTraits({ dragonId: 1 })
//   .then((dragon) => console.log("dragon", dragon))
//   .catch((error) => console.error("error".error));

module.exports = { getDragonWithTraits };

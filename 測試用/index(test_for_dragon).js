const Dragon = require("./dragon.js");

const rebeca = new Dragon({ birthdate: new Date(), nickname: "rebeca" }); //new Date()會顯示現在的時間
const Eva = new Dragon({ birthdate: "0410", nickname: "Eva" });

console.log(rebeca);
console.log(Eva);

setTimeout(() => {
  const mamir = new Dragon();
  console.log(mamir);
}, 3000);

//用來把密碼加密的檔案
const SHA256 = require("crypto-js/sha256");
const { APP_SECRET } = require("../../secrets");

const hash = (string) => {
  //怕駭客知道我們是用SHA256加密，因此加一個功能讓密碼加密的更複雜
  return SHA256(`${APP_SECRET}${string}${APP_SECRET}`).toString();
};

module.exports = { hash };

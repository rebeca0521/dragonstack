const uuid = require("uuid/v4"); //用來產生變數的套件
const { hash } = require("./helper");

const SEPARATOR = "|";

class Session {
  constructor({ username }) {
    this.username = username;
    this.id = uuid();
  }

  toString() {
    const { username, id } = this;

    return Session.sessionString({ username, id });
  }

  //用來return部分sessionString的function
  static parse(sessionString) {
    const sessionData = sessionString.split(SEPARATOR);

    return {
      username: sessionData[0],
      id: sessionData[1],
      sessionHash: sessionData[2],
    };
  }

  //用來驗證cookie是否有效
  static verify(sessionString) {
    const { username, id, sessionHash } = Session.parse(sessionString);

    const accountData = Session.accountData({ username, id });

    return hash(accountData) === sessionHash;
  }

  static accountData({ username, id }) {
    return `${username}${SEPARATOR}${id}`;
  }

  static sessionString({ username, id }) {
    const accountData = Session.accountData({ username, id });

    return `${accountData}${SEPARATOR}${hash(accountData)}`;
  }
}

/* debuging code */
// const rebeca = new Session({ username: "rebeca" });
// const rebecaTostring = rebeca.toString();

// console.log("Session.parse(rebecaTostring)", Session.parse(rebecaTostring));
// console.log("Session.verify(rebecaTostring)", Session.verify(rebecaTostring));

// const fake = `admin_${rebecaTostring}`;
// console.log("Session.verify(fake)", Session.verify(fake));

module.exports = Session;

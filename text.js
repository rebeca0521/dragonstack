const TRAITS = require("./backend/data/traits.json");

const DEFAULT_PROPERTIES = {
  nickname: "unnamed",
  generationId: undefined,
  get birthdate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach((TRAITS) => {
      const traitType = TRAITS.type;
      const traitValues = TRAITS.values;

      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];

      traits.push({ traitType, traitValue });
    });

    return traits;
  },
};

class Dragon {
  constructor({ birthdate, nickname, traits, generationId } = {}) {
    //加一個{}可以讓參數變成key,value形式
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
  }
}

const dragon = new Dragon();

var dd = dragon.traits.map(({ traitType, traitValue }) => {
  return traitType, traitValue;
});

console.log("我是測試員", dd);

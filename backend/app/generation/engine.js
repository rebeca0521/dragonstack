const Generation = require(".");
const GenerationTable = require("./table");

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }

  start() {
    this.buildNewGeneraiton();
  }

  stop() {
    clearTimeout(this.timer); //clearTimeout用來清除setTimeout
  }

  buildNewGeneraiton() {
    const generation = new Generation();
    GenerationTable.storeGeneration(generation)
      .then(({ generationId }) => {
        this.generation = generation;
        this.generation.generationId = generationId;

        console.log("generation", this.generation);

        this.timer = setTimeout(
          () => this.buildNewGeneraiton(),
          this.generation.expiration.getTime() - Date.now()
        );
      })
      .catch((error) => console.log(error));
  }
}

module.exports = GenerationEngine;

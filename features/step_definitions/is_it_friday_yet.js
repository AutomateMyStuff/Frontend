const assert = require("assert");

function isItFriday(today) {
  if (today === "Friday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}

function setTheDay(givenDay) {
  this.today = givenDay;
}

function isItFridayYet() {
  this.actualAnswer = isItFriday(this.today);
}

function assertTGIF(expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
}

module.exports = { setTheDay, isItFridayYet, assertTGIF };

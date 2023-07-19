// Cucumber imports and gherkin syntax
const { Given, When, Then } = require("@cucumber/cucumber");

// Implementations for is_it_friday_yet features
const { setTheDay, isItFridayYet, assertTGIF } = require("./is_it_friday_yet");

// is_it_friday_yet features
Given("today is {string}", setTheDay);
When("I ask whether it's Friday yet", isItFridayYet);
Then("I should be told {string}", assertTGIF);

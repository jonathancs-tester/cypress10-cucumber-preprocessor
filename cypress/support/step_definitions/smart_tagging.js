const assert = require("assert");
// eslint-disable-next-line import/no-extraneous-dependencies
const { Then } = require("cypress10-cucumber-preprocessor/steps");

Then(`this focused scenario should run`, () => {
  assert(true);
});

Then(`this unfocused scenario should not run`, () => {
  assert(false);
});

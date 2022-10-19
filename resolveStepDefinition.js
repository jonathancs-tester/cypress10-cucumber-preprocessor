// reexporting here for backward compability
const {
  Given,
  When,
  Then,
  And,
  But,
  defineParameterType,
} = require("./lib/resolveStepDefinition");

// eslint-disable-next-line no-console
console.warn(
  "DEPRECATION WARNING! Please change your imports from cypress10-cucumber-preprocessor/resolveStepDefinition to cypress10-cucumber-preprocessor/steps"
);

module.exports = {
  Given,
  When,
  Then,
  And,
  But,
  defineParameterType,
};

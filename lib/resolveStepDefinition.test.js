/* eslint-disable global-require */

const {
  resolveFeatureFromFile,
} = require("./testHelpers/resolveFeatureFromFile");

describe("Scenario Outline", () => {
  require("../cypress/support/step_definitions/scenario_outline_integer");
  require("../cypress/support/step_definitions/scenario_outline_string");
  require("../cypress/support/step_definitions/scenario_outline_data_table");
  require("../cypress/support/step_definitions/scenario_outline_multiple_vars");
  resolveFeatureFromFile("./cypress/e2e/ScenarioOutline.feature");
});

describe("DocString", () => {
  require("../cypress/support/step_definitions/docString");
  resolveFeatureFromFile("./cypress/e2e/DocString.feature");
});

describe("Data table", () => {
  require("../cypress/support/step_definitions/dataTable");
  resolveFeatureFromFile("./cypress/e2e/DataTable.feature");
});

describe("Basic example", () => {
  require("../cypress/support/step_definitions/basic");
  resolveFeatureFromFile("./cypress/e2e/Plugin.feature");
});

describe("Background section", () => {
  require("../cypress/support/step_definitions/backgroundSection");
  resolveFeatureFromFile("./cypress/e2e/BackgroundSection.feature");
});

describe("Regexp", () => {
  require("../cypress/support/step_definitions/regexp");
  resolveFeatureFromFile("./cypress/e2e/RegularExpressions.feature");
});

describe("Custom Parameter Types", () => {
  require("../cypress/support/step_definitions/customParameterTypes");
  resolveFeatureFromFile("./cypress/e2e/CustomParameterTypes.feature");
});

describe("Tags implementation", () => {
  require("../cypress/support/step_definitions/tags_implementation");
  resolveFeatureFromFile("./cypress/e2e/TagsImplementation.feature");
});

describe("Tags with env TAGS set", () => {
  window.Cypress = {
    ...window.Cypress,
    env: () => "@test-tag and not @ignore-tag",
  };
  require("../cypress/support/step_definitions/tags_implementation_with_env_set");
  resolveFeatureFromFile(
    "./cypress/e2e/TagsImplementationWithEnvSet.feature"
  );

  resolveFeatureFromFile(
    "./cypress/e2e/TagsImplementationWithEnvSetScenarioLevel.feature"
  );
});

describe("Smart tagging", () => {
  window.Cypress = {
    ...window.Cypress,
    env: () => "",
  };
  require("../cypress/support/step_definitions/smart_tagging");
  resolveFeatureFromFile("./cypress/e2e/SmartTagging.feature");
});

describe("And and But", () => {
  require("../cypress/support/step_definitions/and_and_but_steps");
  resolveFeatureFromFile("./cypress/e2e/AndAndButSteps.feature");
});

describe("defineStep", () => {
  require("../cypress/support/step_definitions/usingDefineSteps");
  resolveFeatureFromFile("./cypress/e2e/DefineStep.feature");
});

describe("Before and After", () => {
  require("../cypress/support/step_definitions/before_and_after_steps");
  resolveFeatureFromFile("./cypress/e2e/BeforeAndAfterSteps.feature");
});

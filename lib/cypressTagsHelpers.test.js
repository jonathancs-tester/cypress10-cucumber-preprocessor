const { stripCLIArguments, getGlobArg } = require("./cypressTagsHelpers");

const processArgv = process.argv;

describe("stripCLIArguments function should return correct args array", () => {
  beforeEach(() => {
    process.argv = ["path/to/node", "path/to/file", "run"];
  });

  test("when only target option is present", () => {
    process.argv.push(...["-g", "cypress/e2e/**/*.feature"]);
    expect(stripCLIArguments(["g"])).to.eql(["run"]);
  });

  test("when target option is a word", () => {
    process.argv.push(...["--glob", "cypress/e2e/**/*.feature"]);
    expect(stripCLIArguments(["glob"])).to.eql(["run"]);
  });

  test("when option doesn't have a value tied to it", () => {
    process.argv.push(...["-g"]);
    expect(stripCLIArguments(["g"])).to.eql(["run"]);
  });

  test("when there are multiple options but only one is target for removal", () => {
    process.argv.push(...["-g", "-t"]);
    expect(stripCLIArguments(["g"])).to.eql(["run", "-t"]);
  });

  test("when there are multiple options to remove", () => {
    process.argv.push(...["-g", "-t", "cypress tags string"]);
    expect(stripCLIArguments(["g", "t"])).to.eql(["run"]);
  });

  test("when option is coupled with other ones like -tg", () => {
    process.argv.push(...["-tg", "cypress/e2e/**/*.feature"]);
    expect(stripCLIArguments(["t"])).to.eql([
      "run",
      "-g",
      "cypress/e2e/**/*.feature",
    ]);
  });

  test("when option is coupled with other ones like -gt where t has a value", () => {
    process.argv.push(...["-gt", "cypress tags string"]);
    expect(stripCLIArguments(["t"])).to.eql(["run", "-g"]);
  });

  afterEach(() => {
    process.argv = processArgv;
  });
});

describe("getGlobArg function should return", () => {
  beforeEach(() => {
    process.argv = ["path/to/node", "path/to/file", "run"];
  });

  test("glob pattern when using -g or --glob option", () => {
    process.argv.push(...["-g", "cypress/e2e/**/*.feature"]);
    expect(getGlobArg()).to.equal("cypress/e2e/**/*.feature");
  });

  test("glob pattern containing commas when using -g option", () => {
    process.argv.push(...["-g", "cypress/e2e/**/1,2*.feature"]);
    expect(getGlobArg()).to.equal("cypress/e2e/**/1,2*.feature");
  });

  test("glob pattern containing braced sections when using -g option", () => {
    process.argv.push(...["-g", "cypress/e2e/**/{1,2}*.feature"]);
    expect(getGlobArg()).to.equal("cypress/e2e/**/{1,2}*.feature");
  });

  test("glob pattern when using env variables GLOB=", () => {
    process.argv.push(...["-e", "GLOB=cypress/e2e/**/*.feature"]);
    expect(getGlobArg()).to.equal("cypress/e2e/**/*.feature");
  });

  afterEach(() => {
    process.argv = processArgv;
  });
});

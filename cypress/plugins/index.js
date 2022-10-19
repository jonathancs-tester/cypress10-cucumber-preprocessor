const cucumber = require("cypress10-cucumber-preprocessor").default; // eslint-disable-line

module.exports = (on) => {
  on("file:preprocessor", cucumber());
};

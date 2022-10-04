const Repo = "mandrasch/11ty-plain-bootstrap5"; // Change repo to change the contributors. NOTE: REPO MUST BE PUBLIC
const Cache = require("@11ty/eleventy-fetch"); // Use fetch to get the contributors

module.exports = async function () {
  return await Cache(`https://api.github.com/repos/${Repo}/contributors`, {
    duration: "1w", // 1 week
    type: "json",
  });
};

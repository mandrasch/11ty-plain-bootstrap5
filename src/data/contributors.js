const Repo = "mandrasch/11ty-plain-bootstrap5"; // Define the repo to get contributors from
const Cache = require("@11ty/eleventy-fetch");

module.exports = async function () {
  return await Cache(`https://api.github.com/repos/${Repo}/contributors`, {
    duration: "1w", // 1 week
    type: "json",
  });
};

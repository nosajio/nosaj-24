const vercelPrettier = require("@vercel/style-guide/prettier");

module.exports = {
  ...vercelPrettier,

  singleQuote: false,
  plugins: ["prettier-plugin-tailwindcss"],
};

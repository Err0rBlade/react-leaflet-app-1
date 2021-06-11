require("dotenv").config();

module.exports = {
  IS_PROD: process.env.NODE_ENV === "production",
  NODE_ENV: process.env.NODE_ENV === "development",
  PORT: process.env.PORT || 5000,
  HOST: process.env.HOST || "localhost",
  DB_USERNAME: process.env.DB_USERNAME || "akshay654321",
  DB_PASSWORD: process.env.DB_PASSWORD || "akshay654321",
  DB_CLUSTER: process.env.DB_CLUSTER || "cluster0.bdrhk",
  // SESS_SECRET: process.env.SESS_SECRET === 123,
  // COOKIE_NAME: process.env.COOKIE_NAME === "akshaycookie",
  SESS_SECRET: "abcg",
  COOKIE_NAME: "akshaycookie",
};

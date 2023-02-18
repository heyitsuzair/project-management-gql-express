const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { bgRed, bgBlue } = require("colors");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

/**
 * GraphQl Configuration
 */
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
app.use(
  "/graphql",
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === "development" })
);

/**
 * GraphQl Configuration
 */
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected".bgBlue.bold);
  })
  .catch((error) => {
    console.log(error.message);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`Listening On Port ${process.env.PORT}`.bgRed.bold);
});

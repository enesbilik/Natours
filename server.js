const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log("DB connection successful"));

const app = require("./app");

const PORT = process.env.PORT || 7000;
const URL = "127.0.0.1";

// console.log(process.env)

app.listen(PORT, URL, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening port on http://${URL}:${PORT}`);
});

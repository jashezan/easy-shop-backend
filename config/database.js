const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname+"/config.env" })
console.log( __dirname+"/config.env")

const connectDatabase = () => {
  console.log("Connecting to database...", process.env.MONGO_URL);
  mongoose.set("strictQuery", true); // (strictQuery is used to throw an error if you try to query a field that is not in the schema) (strictQuery is set to false by default) (strictQuery is set to true by default in mongoose 6.0.0)
  mongoose.connect(process.env.MONGO_URL).then((con) => {
    console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
  });
};

module.exports = connectDatabase;

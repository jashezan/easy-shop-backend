const app = require("./app");
// Importing app (see app.js)
const connectDatabase = require("./config/database");
// Importing database connection function (see config/database.js) (see config/config.env)

// Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  /*
  (uncaughtException is an event that is emitted when an uncaught exception bubbles all the way back to the event loop) 
  (uncaughtException is not a good way to handle errors, it is better to use try catch blocks) 
  (uncaughtException is used when you want to handle all the uncaught exceptions in one place)
  */
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
  /*
  (process.exit() is used to exit the process) 
   (1 means uncaught exception)
   (0 means success) 
   (anything else means failure) 
   */
});

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  // (process.env.NODE_ENV is an environment variable that is set to "PRODUCTION" when the app is deployed to production) (process.env.NODE_ENV is set to "DEVELOPMENT" when the app is run locally) (process.env.NODE_ENV is set to "TEST" when the app is run in test mode) (process.env.NODE_ENV is set to "STAGING" when the app is deployed to staging) (process.env.NODE_ENV is set to "PRODUCTION" when the app is deployed to production)
  require("dotenv").config({ path: "/config/config.env" });
// (dotenv is a package that is used to load environment variables from a .env file into process.env) (path: "backend/config/config.env" is the path to the .env file) (see config/config.env)

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

// Handle Unhandled promise rejections
process.on("unhandledRejection", (err) => {
  /*
  (unhandledRejection is an event that is emitted when a promise is rejected and no error handler is attached to the promise) 
  (unhandledRejection is not a good way to handle errors, it is better to use try catch blocks) 
  (unhandledRejection is used when you want to handle all the unhandled rejections in one place)
  */
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
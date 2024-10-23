const express = require("express");
const fakerApiRouter = require("./utils/fake"); // Adjust the path accordingly

const app = express();

// Use the Faker API route
app.use("/api", fakerApiRouter);

app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});

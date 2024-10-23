const express = require("express");
const fakerApiRouter = require("./utils/fake"); // Adjust the path accordingly

const app = express();

// Use the Faker API route
app.use("/api", fakerApiRouter);
app.get("/health", (req, res) => {
  try {
    res.status(200).json({ message: "healthy" });
  } catch (error) {
    res.status(400).json({ message: " not healthy" });
  }
});

app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});

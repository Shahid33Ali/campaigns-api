const express = require("express");
const faker = require("faker"); // Adjust the path as necessary

const router = express.Router();

// Generate fake campaign data
const generateFakeCampaignData = (num) => {
  const fakeCampaigns = [];
  for (let i = 0; i < num; i++) {
    const leads = Array.from(
      { length: faker.datatype.number({ min: 1, max: 5 }) },
      () => ({
        name: faker.name.findName(),
        email: faker.internet.email(),
        converted: faker.datatype.boolean(),
      })
    );

    fakeCampaigns.push({
      name: faker.company.companyName(),
      startDate: faker.date.past(),
      endDate: faker.date.future(),
      leads: leads,
      fetchedAt: new Date(),
    });
  }
  return fakeCampaigns;
};

// API route to get fake campaign data
router.get("/campaigns", async (req, res) => {
  const num = parseInt(req.query.num) || 10; // Default to 10 campaigns
  const data = generateFakeCampaignData(num);

  // Optionally, you can save the generated data to the database

  res.json(data);
});

module.exports = router;

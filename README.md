# Campaign API

## Overview

This repository provides a simple API for generating dynamic campaign data using **Faker.js**. It is designed for testing purposes, offering mock campaign data to simulate real-world CRM operations. This API is **not hosted**, and you need to clone and run it locally for use.

## Key Features

1. **Dynamic Data Generation**: Generates random campaign data with each request. By default, the API returns 10 campaign documents, but you can customize the number of documents by passing a query parameter (`num`).
2. **Faker.js**: Uses Faker.js to create realistic, randomized data for campaigns, including campaign names, dates, and other related details.

## Technologies Used

- **Node.js**: Runtime environment for executing the server-side code.
- **Express.js**: Web framework for creating API routes.
- **Faker.js**: Used to generate dynamic fake data for campaigns.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Shahid33Ali/campaign-api.git

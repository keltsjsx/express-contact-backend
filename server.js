const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000

app.get('/api/contact', (req, res) => {
  res.status(200).json({
    message: "Get all contacts"
  })
})

app.listen(port, () => {
  console.log(`this server running on port ${port}`);
})
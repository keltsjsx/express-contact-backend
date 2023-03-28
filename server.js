const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000

app.use('/api/contact', require('./routes/contact'))

app.listen(port, () => {
  console.log(`this server running on port ${port}`);
})
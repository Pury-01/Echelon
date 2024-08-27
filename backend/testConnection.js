require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

console.log('MONGO_URI:', process.env.MONGO_URI);

const uri = process.env.MONGO_URI; // Access MONGO_URI from environment variables

if (!uri) {
  console.error('MongoDB URI is not defined in environment variables');
  process.exit(1);
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();


/* Middleware */
app.use(cors());
app.use(express.json());


/* Example Route */
app.get('/', (req, res) => {
	res.send('Server is up and running');
});

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

/* Start Server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));

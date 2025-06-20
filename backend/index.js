const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const entryRoutes = require('./routes/entryRoutes');
app.use('/api/entries', entryRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running`);
});

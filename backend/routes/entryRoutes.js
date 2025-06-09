const express = require('express');
const Entry = require('../models/Entry');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newEntry = new Entry(req.body);
    const saved = await newEntry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

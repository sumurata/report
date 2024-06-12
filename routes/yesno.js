const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
  request('https://yesno.wtf/api', (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.json(data);
    } else {
      res.status(500).json({ error: 'Failed to fetch data from API' });
    }
  });
});

module.exports = router;
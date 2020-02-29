
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET route to query data base for responses
router.get('/', (req, res) => {
    console.log('GET /api/response');
    pool.query('SELECT * from "feedback";').then((result) => {
        console.table(result.rows)
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/response', error)
        res.sendStatus(500);
    });
})

// POST route to add user response data
router.post('/', (req, res) => {
    const feedback = req.body;
    const query = `INSERT INTO "feedback" (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4)`;
    pool.query(query, [feedback.feeling, feedback.understanding, feedback.supporting, feedback.comments])
      .then((result) => {
        console.table(result.rows);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error making database query ${query}`, error);
        res.sendStatus(500);
      })
   })
   

module.exports = router;
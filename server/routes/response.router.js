
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET route to query data base for responses
router.get('/', (req, res) => {
    console.log('GET /api/response');
    pool.query('SELECT * from "feedback" ORDER BY "id" DESC;').then((result) => {
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
   
   // PUT will modify the quantity of an inventory item by id
router.put('/:id', (req, res) => {
    let idToUpdate = req.params.id;
    let checkFlag = req.body.flag;
    let flagged = 'true'
        if (checkFlag === 'false'){
            flagged = 'true';
        }else{
            flagged = 'false'
        }
    // console.log('in put with', idToUpdate, flagged);
    let sqlText = `UPDATE "feedback" SET "flagged" =$1 WHERE "id" =$2`;
    pool.query(sqlText, [flagged, idToUpdate])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      })
   })

router.delete('/:id',(req,res)=>{
    let reqId = req.params.id;
    let sqlText = 'DELETE FROM "feedback" WHERE "id" =$1;';
    console.log(`in delete with ${reqId}`);
    pool.query(sqlText, [reqId])
    .then((result)=>{
        res.sendStatus(200);
    })
    .catch((error)=>{
    console.log(`Error making database delete ${sqlText}`, error);
    res.sendStatus(500);
    })
})
   

module.exports = router;
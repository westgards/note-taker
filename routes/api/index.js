const router = require('express').Router();
const { title } = require('process');
// const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../../public/helpers/fsUtils');

// GET Route for retrieving the HTML notes file
router.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    );

// POST Route for submitting a note
router.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    const {  } = req.body;
  
    // If all the required properties are present
    if (title, text) {
      // Variable for the object we will save
      const newNotes = {
        title,
        text,
      };
  
      readAndAppend(newNote, './db/db.json');
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting a note');
    }
  });

module.exports = router;
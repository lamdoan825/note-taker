// Dependencies
const router = require('express').Router();

const saveData = require('../db/saveData');

router.get("/notes", function (req, res) {
  save
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
  save
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
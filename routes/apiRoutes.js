// Dependencies
const router = require('express').Router();

const saveData = require('../db/saveData');

router.get('/notes', (req, res) => {
  saveData
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  saveData
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

router.delete('/notes/:id', (req, res) => {
  saveData
    .removeNote(req.params.id)
    .then((note) => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
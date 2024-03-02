const express = require('express');
const router = express.Router();

const authorControllers = require('../controllers/author.controller');


router.post("", authorControllers.createAuthor);
router.get("", authorControllers.getAuthors);
router.get("/:id", authorControllers.getAuthorById);
router.put("/:id", authorControllers.updateAuthor);
router.delete("/:id", authorControllers.deleteAuthor);


module.exports = router;
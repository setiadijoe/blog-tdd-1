const express = require('express');
const router = express.Router()
const Blog = require('../controllers/blog')

router.post('/blog', Blog.create)

router.get('/blog', Blog.read)

module.exports = router;
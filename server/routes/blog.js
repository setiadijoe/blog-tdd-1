const express = require('express');
const router = express.Router()
const Blog = require('../controllers/blog')

router.post('/blog', Blog.create)

router.get('/blog', Blog.read)

router.get('/blog/:id', Blog.findById)

router.put('/blog/:id', Blog.update)

router.delete('/blog/:id', Blog.delete)

module.exports = router;
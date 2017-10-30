const Blog = require('../models/blog')

class BLOG {
    static create(req, res){
        let blog = new Blog(req.body)
        blog.save()
            .then(savedarticle=>{
                res.status(200).send(savedarticle)
            })
            .catch(err=>{
                res.status(400).send(err)
            })
    }

    static read(req, res){
        Blog.find()
            .then(getArticle=>{
                res.status(200).send(getArticle)
            })
            .catch(err=>{
                res.status(404).send(err)
            })
    }
}

module.exports = BLOG;
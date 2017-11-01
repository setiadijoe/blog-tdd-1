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

    static findById(req, res){
        Blog.findById(req.params.id)
            .then(getArticle=>{
                res.status(200).send(getArticle)
            })
            .catch(err=>{
                res.status(404).send(err)
            })
    }

    static update(req, res){
        Blog.findByIdAndUpdate(req.params.id, {
            $set:{
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                imgUrl: req.body.imgUrl
            }
        },{new: true})
        .then(blogArticle=>{
            res.status(200).send({blogArticle, message:'Book updated!'})
        })
        .catch(err=>{
            res.status(400).send(err)
        })
    }

    static delete(req, res) {
        Blog.findByIdAndRemove(req.params.id)
            .then(blogArticle => {
                res.status(200).send(blogArticle)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }
}

module.exports = BLOG;
let mongoose = require("mongoose");
let Blog = require('../models/blog');

const chai = require('chai');
const should = chai.should()
const chaiHttp = require('chai-http');
const app = require('../app')

chai.use(chaiHttp)

describe('Blog', () => {
    beforeEach((done) => {
        Blog.remove({}, (err) => {
            done();
        });
    });
    // describe('post blog article', function(){
    //     it('should return an article, after that save in database', function(done){
    //         chai.request(app)
    //         .post('/api/blog')
    //         .send({
    //             title: 'Attack On Hacktiv8',
    //             content: 'Hacktiv8 is the Beast Titan that can thinking and act as human',
    //             author: 'Eiger'
    //         })
    //         .end(function(err, response){
    //             console.log(response.body);
    //             response.status.should.equal(200)
    //             response.body.should.be.an('object')
    //             response.body.should.have.property('_id')
    //             response.body.should.have.property('title')
    //             response.body.should.have.property('content')
    //             response.body.should.have.property('author')
    //             response.body.title.should.equal('Attack On Hacktiv8')
    //             response.body.content.should.equal('Hacktiv8 is the Beast Titan that can thinking and act as human')
    //             response.body.author.should.equal('Eiger')
    //             done()
    //         })
    //     })
    // })

    describe('get all article from database', function () {
        it('should get all article from database', function (done) {
            chai.request(app)
                .get('/api/blog')
                .end(function (err, response) {
                    console.log(response.body);
                    response.status.should.equal(200)
                    response.body.should.be.an('array')
                    response.body.length.should.be.eql(0);
                    done()
                })
        })
    })

    // describe('update an article in database', () => {
    //     it('it should UPDATE a book given the id', (done) => {
    //         let blog = new Blog({
    //             title: "Attack On Hacktiv8",
    //             content: "Edit this one",
    //             author: 'Read-Wan'
    //         })
    //         blog.save((err, blog) => {
    //             console.log('====================================');
    //             console.log('yang ini dari hasil put', blog);
    //             console.log('====================================');
    //             chai.request(app)
    //                 .put('/api/blog/' + blog.id)
    //                 .send({
    //                     title: "Attack On Hacktiv8",
    //                     content: "NOt this one",
    //                     author: 'Read-Wan'
    //                 })
    //                 .end((err, response) => {
    //                     console.log(response.body);
    //                     response.should.have.status(200);
    //                     response.body.should.be.an('object')
    //                     response.body.should.have.property('message').eql('Book updated!');
    //                     done();
    //                 });
    //         });
    //     });
    // });

    // describe('delete an article with the identification id', function () {
    //     it('the article will deleted', function (done) {
    //         let blog = new Blog({
    //             title: 'Human Being',
    //             content: 'Bukan ini yang akan dipublish',
    //             author: 'Billy'
    //         })
    //         blog.save((err, blog) => {
    //             chai.request(app)
    //                 .delete(`/api/blog/${blog._id}`)
    //                 .end((err, response) => {
    //                     console.log('====================================');
    //                     console.log(response.body);
    //                     console.log('====================================');
    //                     response.status.should.be.equal(200)
    //                     response.should.be.an('object')
    //                     response.body.should.have.property('_id')
    //                     response.body.should.have.property('title')
    //                     response.body.should.have.property('content')
    //                     response.body.should.have.property('author')
    //                     response.body.title.should.equal('Human Being')
    //                     response.body.content.should.equal('Bukan ini yang akan dipublish')
    //                     response.body.author.should.equal('Billy')
    //                     done()
    //                 })
    //         })
    //     })
    // })
})

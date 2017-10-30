const chai = require('chai');
const should = chai.should()
const chaiHttp = require('chai-http');
const app = require('../app')

chai.use(chaiHttp)

describe('post blog article', function(){
    it('should return an article, after that save in database', function(done){
        chai.request(app)
        .post('/api/blog')
        .send({
            title: 'Attack On Hacktiv8',
            content: 'Hacktiv8 is the Beast Titan that can thinking and act as human',
            author: 'Eiger'
        })
        .end(function(err, response){
            response.status.should.equal(200)
            response.body.should.be.an('object')
            response.body.should.have.property('_id')
            response.body.should.have.property('title')
            response.body.should.have.property('content')
            response.body.should.have.property('author')
            response.body.title.should.equal('Attack On Hacktiv8')
            response.body.content.should.equal('Hacktiv8 is the Beast Titan that can thinking and act as human')
            response.body.author.should.equal('Eiger')
            done()
        })
    })
})
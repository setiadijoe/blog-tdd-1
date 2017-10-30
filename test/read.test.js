const chai = require('chai');
const should = chai.should()
const chaiHttp = require('chai-http');
const app = require('../app')

chai.use(chaiHttp)

describe('get all article from database', function(done){
    it('should get all article from database', function(){
        chai.request(app)
        .get('/api/blog')
        .end(function(err, response){
            response.status.should.equal(200)
            response.body.should.be('object')
            response.body.should.have.property('_id')
            response.body.should.have.property('title')
            response.body.should.have.property('content')
            response.body.should.have.property('author')
            done()
        })
    })
})
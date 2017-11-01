let mongoose = require("mongoose");
let User = require('../models/user');

const chai = require('chai');
const should = chai.should()
const chaiHttp = require('chai-http');
const app = require('../app')

chai.use(chaiHttp)

describe('User', function(){
    before(function(done){
        User.remove({}, function(err){
            done()
        })
    })

    describe('Someone will login', function(){
        it('should allow user to acces the blog', function(done){
            chai.request(app)
                .post('/login', )
        })
    })
})
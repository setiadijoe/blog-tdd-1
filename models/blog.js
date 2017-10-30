const mongoose = require('mongoose');

mongoose.connection.openUri('mongodb://localhost/blogtdd'+process.env.NODE_ENV, (err)=>{
    if(err) console.log('database unconnected');
    console.log('database connected');
})

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    content: String,
    author: String
})
const Blog = mongoose.model('Blogs', blogSchema)

module.exports = Blog
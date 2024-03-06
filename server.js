const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');
const app = express();

console.log("npm server is running");
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// connect to the database
mongoose.connect("mongodb+srv://admin:YYfocnoaN7OXJHTZ@freeapi.otpjiys.mongodb.net/newapi?retryWrites=true&w=majority&appName=FreeApi").then(
    console.log("connected to database successfully"),
    app.listen(4000, function () { console.log('App listening on port 4000!') })
);



app.get("/",  async(req, res)=> {
    try{
        const products = await Product.find({});
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get("/products/:id",  async(req, res)=> {
    try{
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.post("/products",  async(req, res)=> {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})


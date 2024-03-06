const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');
const app = express();

console.log("npm server is running");

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

mongoose.set("strictQuery", false)

// connect to the database
mongoose.connect("mongodb+srv://admin:YYfocnoaN7OXJHTZ@freeapi.otpjiys.mongodb.net/newapi?retryWrites=true&w=majority&appName=FreeApi").then(
    console.log("connected to database successfully"),
    app.listen(4000, function () { console.log('App listening on port 4000!(http://localhost:4000)') })
);


//fetch all products
app.get("/products",  async(req, res)=> {
    try{
        const products = await Product.find({});
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//fetch product by id
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

// update a product
app.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a product
app.delete('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})




import express from 'express';
import productController from './src/controllers/products.controller.js';

const server = express();

// creating productController instance
const productControllers = new productController();


server.get('/', productControllers.getProducts)

server.use(express.static('src/views'))

server.listen(3200, ()=>(console.log("server started at 3200")));
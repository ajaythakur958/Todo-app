import express from 'express';
import productController from './src/controllers/products.controller.js';
import path from 'path';
import ejsLayout from 'express-ejs-layouts';

const server = express();
server.use(ejsLayout);

// creating productController instance
const productControllers = new productController();

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(),'src','views'))

server.get('/', productControllers.getProducts)

server.use(express.static('src/views'));

server.listen(3200, ()=>(console.log("server started at 3200")));
import path from 'path';
import productModel from '../models/products.model.js'
export default class productController{
    
    getProducts(req, res){
        let products = productModel.get();
        // console.log(productModel.get());
        // res.sendFile(path.join(path.resolve(),'src','views','products.html'))
        res.render("products", {products:products})
    }
}

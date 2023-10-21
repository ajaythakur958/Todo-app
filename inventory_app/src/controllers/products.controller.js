import path from 'path';
import productModel from '../models/products.model.js'
export default class productController{
    
    getProducts(req, res){
        let products = productModel.get(); 

        res.render("products", {products:products}) // rendering products.ejs to index.js
    }

    getAddForm(req, res){
        return res.render('new-product')
    }

    addNewProduct(req,res){
        console.log(req.body);
        productModel.add(req.body);
        let products = productModel.get();
        res.render('products', {products: products})
    }


}

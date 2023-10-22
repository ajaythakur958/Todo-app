import path from 'path';
import productModel from '../models/products.model.js'
export default class productController{
    
    getProducts(req, res){
        let products = productModel.get(); 

        res.render("products", {products:products}) // rendering products.ejs to index.js
    }

    getAddForm(req, res){
        let errors =[];
        return res.render('new-product', {errorMessage:errors[0]})
    }

    addNewProduct(req,res){
        console.log(req.body);
        const {name, price, imgurl} = req.body; // validating if client have entered details valid or not 
        let errors = [];
        if(!name || name.trim() == ''){
            errors.push('name is invalid')
        }
        if (!price || price < 1){
            errors.push('price is invalid')
        }
        try {
            const validurl = new URL(imgurl);
        } catch{
            errors.push('invalid URL')
        }

        if (errors.length > 0){  // sending response if error shows for invalid data from client
            return res.render('new-product', {errorMessage:errors})
        }
        productModel.add(req.body);
        let products = productModel.get();
        res.render('products', {products: products})
    }


}

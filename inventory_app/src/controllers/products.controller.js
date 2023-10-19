import path from 'path';

export default class productController{
    getProducts(req, res){
        res.sendFile(path.join(path.resolve(),'src','views','products.html'))
    }
}
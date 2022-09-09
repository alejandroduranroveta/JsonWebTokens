const fs = require('fs')
const path = require('path');

const listProducts = (req, res) => {
   
   try{
      

      const dbProducts = fs.readFileSync(path.join(__dirname, "/../db/products.json"),'utf-8');
      const productos = JSON.parse(dbProducts);
     
      res.status(200).json({
         ok: true,
         msg: 'Lista de productos',
         productos
      })

   }catch(error){
      console.log(error)
      res.status(500).json({
         ok: false,
         msg: 'Lista de productos error '
      })
   }
   
}

const newProduct = (req, res) => {

   res.json({
      ok: true,
      msg: 'Nuevo producto'
   })
}

const editProduct = (req, res) => {

   res.json({
      ok: true,
      msg: 'Producto editado'
   })
}

const deleteProduct = (req, res) => {

   res.json({
      ok: true,
      msg: 'Producto eliminado'
   })
}

module.exports = {
   listProducts,
   newProduct,
   editProduct,
   deleteProduct
}
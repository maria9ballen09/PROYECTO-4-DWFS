const express = require ('express')
const router = express.Router()
const bodyParser = require('body-parser')
const {
    getProducts,
    getProduct,
    createProduct,
    updatProduct,
    deleteProduct
} = require ('../controllers/products.Controller')
    
const jsonParser =bodyParser.json()
router.get('/productos', (req, res) =>{
    const products = getProducts()
    res.json(products)
})



router.get('/producto/:id', (req, res) =>{
    const id = Number(req.params.id)
    const product = getProduct (id)
    res.json(product)
})


router.post ('/productos', jsonParser, (req, res) =>{
    const nuevoProducto = req.body
    const newlist = createProduct(nuevoProducto)

    res.status (201).json(nuevoProducto)
})

router.put('/products/:id', jsonParser, (req, res) => {
    const id = Number(req.params.id)
    updatProduct(id, req.body) 
    //     res.status(404).json({ error:'Producto no encontrado'});
    // }
})

router.delete('/products/:id', (req, res) =>{
    const id = Number(req.params.id)
    const newProducts = deleteProduct(id)
    res.json({message: 'Este producto con el id: ${id} , fue eliminado', data: newProducts})
})


module.exports= router

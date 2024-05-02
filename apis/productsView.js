// aca ponemos lo que es CRUD e importamos express 
const express = require ('express')
const router = express.Router()
const { 
    getProducts,
    getProduct,
    createProduct
} = require ('../controllers/productsController')
    
router.get('/productos', (req, res) =>{
    const products = getProducts()
    res.json(products)
})
router.get('/producto/:id', (req, res) =>{
    const id = Number(req.params.id)
    const product = getProduct (id)
    res.json(products)
})


router.post ('/productos', jsonParser,(req, res) =>{
    const nuevoProducto = req.body
    const newlist =createProduct(nuevoProducto)

    res.status (201).json(nuevoProducto)
})

// router.put('/products/:id', jsonParser, (req, res) => {
//     const id = Number(req.params.id)
//     const index = products.findIndex(p =>p.id === id);
    
//     if(index !== -1) {
//         products[index] = {...products[index], ...req.body}
//         res,json(products[index])
//     }else {
//         res.status(404).json({ error:'Producto no encontrado'});
//     }
// })

// router.delete('/products/:id', (req, res) =>{
//     const id = Number(req.params.id)
//     products = products.filter (p =>p.id !== id)
//     res.json({message: 'Este producto con el id: ${id} , fue eliminado', data:products})
// })

module.exports= router

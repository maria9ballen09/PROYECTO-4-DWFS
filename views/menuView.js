// aca ponemos lo que es CRUD e importamos express 
const express = require ("express")
const { menu } = require("../models/menu")
const { json } = require("body-parser")
const router = express.Router()
  

router.get('/products', (req,res) => {
    res.json(menu)
})
router.get('/products/:id', (req, res) =>{
    const id = Number(req.params.id)
    const products = menu.find(products => products.id === id)
    res.json(products)
})

router.post ('/products', jsonParser,(req, res) =>{
    const nuevoProducto = req.body
    console.log (req)
    nuevoProducto.id = products. length + 1
    products.push (nuevoProducto)
    res.status (201).json(nuevoProducto)
})

router.put('/products/:id', jsonParser, (req, res) => {
    const id = Number(req.params.id)
    const index = products.findIndex(p =>p.id === id);
    
    if(index !== -1) {
        products[index] = {...products[index], ...req.body}
        res,json(products[index])
    }else {
        res.status(404).json({ error:'Producto no encontrado'});
    }
})

router.delete('/products/:id', (req, res) =>{
    const id = Number(req.params.id)
    products = products.filter (p =>p.id !== id)
    res.json({message: 'Este producto con el id: ${id} , fue eliminado', data:products})
})

module.exports= router

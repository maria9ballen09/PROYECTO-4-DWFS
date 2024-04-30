const productsModel = require ('../models/products')

const getProducts = () => {
    return productsModel
}




// app.get('/products', (req,res) => {
//     res.json(menu)
// })
// app.get('/products/:id', (req, res) =>{
//     const id = Number(req.params.id)
//     const products = menu.find(products => products.id === id)
//     res.json(products)
// })

// app.post ('/products', jsonParser,(req, res) =>{
//     const nuevoProducto = req.body
//     console.log (req)
//     nuevoProducto.id = products. length + 1
//     products.push (nuevoProducto)
//     res.status (201).json(nuevoProducto)
// })

// app.put('/products/:id', jsonParser, (req, res) => {
//     const id = Number(req.params.id)
//     const index = products.findIndex(p =>p.id === id);
    
//     if(index !== -1) {
//         products[index] = {...products[index], ...req.body}
//         res,json(products[index])
//     }else {
//         res.status(404).json({ error:'Producto no encontrado'});
//     }
// })

// app.delete('/products/:id', (req, res) =>{
//     const id = Number(req.params.id)
//     products = products.filter (p =>p.id !== id)
//     res.json({message: 'Este producto con el id: ${id} ${port} , fue eliminado', data:products})
// })

module.exports ={
    getProducts
}
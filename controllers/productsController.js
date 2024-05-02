const productsModel = require ('../models/products')

const getProducts = () => {     
    return productsModel
}

const getProduct = (id) => {
    console.log(productsModel)
    const product = productsModel.products.find(product => product.id === id)
    return product
}
2
const createProduct = (body) => {
    nuevoProducto.id = products. length + 1
    productsModel.products.push (nuevoProducto)
    console.log(productsModel)
    return productsModel
}


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

module.exports = {
    products,   
    getProducts,
    getProduct,
    createProduct
    
}
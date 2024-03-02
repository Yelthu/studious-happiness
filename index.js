const express = require('express')
const productRoute = require('./routes/product.route')
const moongose = require('mongoose')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/product', productRoute)


app.get('/', (req, res) => {
    res.send('Hello world from node api')
})

// app.get('/api/product', async (req, res) => {
//     try {
//         const product = await Product.find()
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// app.get('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Product.findById(id)
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// app.post('/api/product', async (req, res) => {
//     try {
//         const product = await Product.create(req.body)
//         res.status(200).send({ message: 'Your product is successfully created' })
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

moongose.connect('mongodb+srv://ylt:pGhBgUyuBmrIhMGl@backend.4akfhq1.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=Backend').then(() => {
    console.log('Connected to DB')

    app.listen(3000, () => {
        console.log('Server is listening on port 3000')
    })
})
    .catch(() => {
        console.log('Connection failed!')
    })
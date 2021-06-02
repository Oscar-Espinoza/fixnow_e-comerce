import express from 'express'
import cors from 'cors'
import data from './data.js'

const app = express();

app.use(cors())

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find( (product, index) => {
    if (product.id === req.params.id) {
      res.send(data.products[index])
    }
  })
  res.send(data.products)
})

app.get('/', (req, res) => {
    res.send('Server is ready')
});

const port = process.env.port || 5000
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});


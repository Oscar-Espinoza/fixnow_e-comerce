import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import data from './data.js'
import userRouter from './routers/userRouter.js';

const app = express();
app.use(cors())
mongoose.connect('mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

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

app.use('/api/users', userRouter)
app.get('/', (req, res) => {
    res.send('Server is ready')
});

const port = process.env.port || 4000
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});


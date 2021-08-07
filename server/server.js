import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import mercadopago from 'mercadopago'

dotenv.config()
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
const allowedOrigings = ['http://localhost:3000/', 'https://www.mercadopago.com.ar/']
app.use(cors())

mercadopago.configure({
  access_token: 'APP_USR-5203191979981822-080516-4a527bb79a6e8359ff372a01e4f09d50-802091653'
})

app.post('/checkout', (req, res) => {

  let preference = {
    items: [
      {
        title: 'Mi producto',
        unit_price: 100,
        quantity: 1,
      }
    ]
  };
  
  mercadopago.preferences.create(preference)
  .then(function(response){
    req.method = 'get'
    console.log(response.body.init_point)
    res.redirect('http://google.com')
  }).catch(function(error){
    console.log(error);
  });
})


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/fixnow', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.get('/', (req, res) => {
    res.send('Server is ready')
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

const port = process.env.port || 5000
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});


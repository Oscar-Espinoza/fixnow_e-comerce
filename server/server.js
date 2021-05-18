import express from 'express'
import cors from 'cors'
import data from './data.js'

const app = express();

app.use(cors())

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/', (req, res) => {
    res.send('Server is ready')
});

const port = process.env.port || 5000
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});


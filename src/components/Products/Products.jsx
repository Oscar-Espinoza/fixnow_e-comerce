import React from 'react';
import Grid from '@material-ui/core'

const products = [
    {id: 1, name: 'iPhone 7 screen', description: 'Modulo de iPhone 7', price: '$1000'},
    {id: 2, name: 'iPhone 8 screen', description: 'Modulo de iPhone 8', price: '$1500'}
]

const Products = ({}) => {
    <main>
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Product
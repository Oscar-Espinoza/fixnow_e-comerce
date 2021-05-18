import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Grid } from '@material-ui/core'

import useStyles from './styles'

import Product from './Product/Product'

// const products = [

//     {id: 1, name: 'iPhone 7 screen', description: 'Modulo de iPhone 7', price: '$1000', img: 'https://www.fixshop.eu/media/carousel_images/1100013305-099_4854737483904091303.jpg.500x0_q85_crop_replace_alpha-%23fff.jpg'},

//     {id: 2, name: 'iPhone 8 screen', description: 'Modulo de iPhone 8', price: '$1500', img: 'https://www.fixshop.eu/media/carousel_images/1100018646-099_1054087305388501952.jpg.500x0_q85_crop_replace_alpha-%23fff.jpg'}

// ]

const Products = () => {

    const [products, setProducts] = useState([])
    const classes = useStyles()

    useEffect(() => {
        let mounted = true
        const fetchData = async () => {
        
        const { data } = await axios.get('/api/products');
        setProducts(data);       
        };
        fetchData()

        return () => {
            mounted = false;
        }
    }, [])
    return( 
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
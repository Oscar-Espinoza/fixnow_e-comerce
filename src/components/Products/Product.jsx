import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconBottom } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import classes from '*.module.css'

const Product = ({ product }) => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h2' color='textSecondary'>
                        {product.description}
                    </Typography>
                </div>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton arial-label='Add to cart'>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default Product

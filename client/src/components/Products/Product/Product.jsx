import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'


import useStyles from './styles'

const Product = ({ product }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.img ? product.img : ''} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        {product.description}
                    </Typography>
                </div>
                <CardActions disableSpacing className={classes.CardActions}>
                  {product.inStock > 0 
                  ? <IconButton arial-label='Add to cart'>
                      <AddShoppingCart />
                    </IconButton>
                    
                  : <></>
                   }
                    
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default Product

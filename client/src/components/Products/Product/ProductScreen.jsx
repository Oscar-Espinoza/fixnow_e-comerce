import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Grid, Typography, Button, InputLabel, Select, MenuItem, CardMedia } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../../../redux/actions/productActions';
import { addToCart } from '../../../redux/actions/cartActions'
const ProductScreen = (props) => {
  const productId = props.match.params.id
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(detailsProduct(productId))
  }, [dispatch, productId]);

  return (
    <>
      {loading ? (
        <> cargando </>
      ) : error ? (
        {error}
      ) : (
        <Box p={5} pt={8}>
          <Grid container justify='center' spacing={10}>
            <Grid item xs={4}>
              <CardMedia image={product.image} style={{height: 400} } />
            </Grid>
            <Grid item xs={4} justify="center" alignItems="center">
              <Card>
                <CardContent>
                  <Typography variant='h4'>
                    {product.name}
                  </Typography>
                  <Typography variant='body2' component='p'>
                    {product.description}
                  </Typography>
                  <Typography variant='body2' component='p'>
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <InputLabel id="demo-simple-select-label">Cant.</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quantity}
                    onChange={(e) => {setQuantity(e.target.value)}}
                  >
                    {
                      [...Array(product.inStock).keys()].map( menuItemIndex => (
                        <MenuItem value={menuItemIndex + 1}>{menuItemIndex + 1}</MenuItem>
                      ))
                    }
                    
                  </Select>
                  <Button size="small">Comprar</Button>
                  <Button size="small" onClick={() => {dispatch(addToCart(productId, quantity))}}>Añadir al carrito</Button>
            </CardActions>
          </Card>
        </Grid>
            <Grid item>
        </Grid>
      </Grid>
        </Box>
      )}
    </>
    
  )
}

export default ProductScreen

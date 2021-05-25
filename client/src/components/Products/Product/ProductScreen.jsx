import React from 'react'
import { Box, Card, CardContent, Grid, Typography, } from '@material-ui/core'
import data from '../../../data'
const ProductScreen = (props) => {
  const product = data.products.find(x => x.id === props.match.params.id)

  return (
    <Box p={5} pt={8}>
      <Grid container justify='center'>
        <Grid item xs={4}>
          <img src={product.img} alt="bateria" />
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant='h4'>
                {product.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductScreen

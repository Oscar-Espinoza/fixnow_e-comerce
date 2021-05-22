import React from 'react'
import { Container, Grid, Typography, } from '@material-ui/core'
import data from '../../../data'
const ProductScreen = (props) => {
  const product = data.products.find(x => x.id === props.match.params.id)

  return (
    <Container>
      <Grid container justify='center'>
        <Grid item xs={6}>
          <img src={data.products[0].img} alt="bateria" />
        </Grid>
        <Grid item>
          <Typography variant='h1'>
            Hola
          </Typography>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductScreen

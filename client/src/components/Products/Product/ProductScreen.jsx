import React, { useState } from 'react'
import { Box, Card, CardActions, CardContent, Grid, Typography, Button, InputLabel, Select, MenuItem } from '@material-ui/core'
import data from '../../../data'
const ProductScreen = (props) => {
  const product = data.products.find(x => x.id === props.match.params.id)
  const [quantity, setQuantity] = useState(1)
  return (
    <Box p={5} pt={8}>
      <Grid container justify='center'>
        <Grid item xs={4}>
          <img src={product.img} alt="bateria" />
        </Grid>
        <Grid item xs={4} justify="center"
        alignItems="center">
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
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quantity}
          onChange={(e) => {setQuantity(e.target.value)}}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
            <Button size="small">Comprar</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProductScreen

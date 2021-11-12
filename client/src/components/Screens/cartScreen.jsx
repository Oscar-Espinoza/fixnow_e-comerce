import { Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper, Typography, Card, CardContent, CardActions, Button, IconButton} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/actions/cartActions'

const CartScreen = () => {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const inputStyle = {display:'none'}
  const CalcSubtotal = (items) => {
    let subtotal = 0
    if (cart.cartItems.length) {
      items.forEach(item => {
        subtotal += item.price
      });
    }
    return subtotal
    
  }
  
  const createCartList = () => {
    const items = cart.cartItems
    if (items.length !== 0) {
      return items.map((item => {
        return (

          <TableRow key={item.product}>
            <TableCell align='right'><Checkbox defaultChecked={true} /></TableCell>
            <TableCell align='center'>{item.name}</TableCell>
            <TableCell align='center'>{item.qty}</TableCell>
            <TableCell align='center'>{item.price}</TableCell>
            <TableCell align='center'><IconButton style={{color: 'black'}}><DeleteIcon onClick={() => { dispatch(removeFromCart(item.product))}}/></IconButton></TableCell>

            <fieldset style={inputStyle}>
              <input type="text" value={item.name} name='title'/>
              <input type="number" value={item.qty} name='quantity'/>
              <input type="number" value={item.price} name='price'/>
            </fieldset>

          </TableRow>
        )
      }))
    } else {
      return (<h3>No hay items en el carro</h3> )
    }
  }

  return (

    
    <Container style={{ paddingTop: 100}}>
    <form action="http://localhost:5000/checkout" method="POST">
      <Grid container justify='center' spacing={2}>
        <Grid item xs='8' sm container>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right"><Checkbox defaultChecked={true} /></TableCell>
                  <TableCell align='center'>Nombre</TableCell>
                  <TableCell align='center'>Cant.</TableCell>
                  <TableCell align='center'>Precio individual</TableCell>
                  <TableCell align='center'>Quitar de la lista</TableCell>
                </TableRow>
              </TableHead>
              
              <TableBody>
                {createCartList()}
              </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        <Grid item xs='4'>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Subtotal: {CalcSubtotal(cart.cartItems)}
              </Typography>
            </CardContent>
            
            <CardActions>
              <Button type='submit' variant="contained" color="primary" disableElevation>
                Continuar compra
              </Button>            
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      </form>
    </Container>
    

  )
}

export default CartScreen

import { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productActions';

import useStyles from './styles'

import Product from './Product/Product'


const Products = () => {
  const dispatch = useDispatch();
  const classes = useStyles()
  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return(
    <>
      {loading ? (
        <>loading</>
          ) : error ? (
            error
          ) : (
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
              {products.map((product) => (
                <Grid item key={product._i} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>
          </main>
        )
      }
    </>      
  )
}

export default Products
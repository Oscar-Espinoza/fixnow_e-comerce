import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/fixnow-logo.png'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const classes = useStyles()
    const qty = useSelector(state => state.cart.cartItems.length)
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                  <Link to='/'>
                  <Typography variant='h6' className>
                        <img src={logo} alt='Commerce.js' height='25px' className={classes.image} />
                    </Typography>
                  </Link>
                  <div className={classes.grow} />
                    <Link className={classes.button} style={{ color:'black' }} to='/cart'>
                        <IconButton arial-label='Show cart items' color='inherit'>
                            <Badge badgeContent={qty} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Link>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar

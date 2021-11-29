import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Badge, Menu, Typography, Button, MenuItem, TextField } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/fixnow-logo.png'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { singout } from '../../redux/actions/userActions'

const Navbar = (props) => {
    const classes = useStyles()
    const qty = useSelector(state => state.cart.cartItems.length)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const singoutHandler = () => {
      dispatch(singout())
      setAnchorEl(null)
    }

    const handleClose = () => {
      setAnchorEl(null);
    };

    const dispatch = useDispatch()
    
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                  <Link to='/'>
                  <Typography variant='h6' className>
                        <img src={logo} alt='Commerce.js' height='25px' className={classes.image} />
                    </Typography>
                  </Link>
                  <TextField id='outlined-basic' variant='outlined' placeholder='search...' size='small'/>
                  <div className={classes.grow} />
                    <Link className={classes.button} style={{ color:'black' }} to='/cart'>
                        <IconButton arial-label='Show cart items' color='inherit'>
                            <Badge badgeContent={qty} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Link>
                    
                    {props.userInfo 
                      ? (<><Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                      {props.userInfo.name}
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={singoutHandler}>Logout</MenuItem>
                    </Menu></>)
                      : (<Link to='/signin' style={{ textDecoration: 'none' }}>Sign In</Link>) 
                    }
                    
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar

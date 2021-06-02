import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/fixnow-logo.png'
import useStyles from './styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className>
                        <img src={logo} alt='Commerce.js' height='25px' className={classes.image} />
                    </Typography>
                    <div className={classes.grow} />
                    <Link className={classes.button} to='/cart'>
                        <IconButton arial-label='Show cart items' color='inherit'>
                            <Badge badgeContent={2} color='secondary'>
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

import React, { useState } from 'react'
import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import { Menu as MenuIcon } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'flex-end',
    },
    menuButton: {
        // Push other menu elements to the right
        marginRight: 'auto',
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
}))

export const NavBar = () => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        console.log(anchorEl, "clicked")
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <AppBar position="sticky" style={{
            backgroundColor: "green",
            color: "lightgreen"
        }}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    style={{ backgroundColor: "green", color: "lightgreen" }}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    edge="start"
                    onClick={handleClick}
                    className={classes.menuButton}
                >
                    <MenuIcon onClick={handleClick} />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <Typography variant="h5">Happy Plants</Typography>
            </Toolbar>
        </AppBar>
    )
}


import React, { useState } from 'react'
import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
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
}));

function Navbar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        console.log(anchorEl, "clicked");
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" onClick={handleClick}>
            <Toolbar className={classes.toolbar}>
                <Button
                    color="green"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    edge="start"
                    onClick={handleClick}
                    className={classes.menuButton}
                > test
                    <MenuIcon onClick={handleClick} />
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
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export { Navbar };
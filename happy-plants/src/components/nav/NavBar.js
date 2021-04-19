import * as React from 'react';
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

function Navbar({ children }) {
    const classes = useStyles();

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    // Close drawer
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    // Toggle drawer
    const onDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        console.log(anchorEl, "clicked");
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <IconButton
                    color="green"
                    aria-controls="simple-menu"
                    aria-label="open-menu"
                    aria-haspopup="true"
                    edge="start"
                    onClick={handleClick}
                    className={classes.menuButton}
                >
                    <MenuIcon />
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
                {children}
            </Toolbar>
        </AppBar>
    );
}

export { Navbar };
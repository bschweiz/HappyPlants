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

export const NavBar = (props) => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        console.log(anchorEl, "clicked")
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleHome = () => {
        props.history.push(`/`)
        handleClose()
    }

    const handleCheckUps = () => {
        props.history.push(`/events`)
        handleClose()
    }

    const handleYourPlants = () => {
        props.history.push(`/plants`)
        handleClose()
    }

    const handleAddPlants = () => {
        props.history.push(`/addplant`)
        handleClose()
    }

    const handleAddCheckUp = () => {
        props.history.push(`/addevent`)
        handleClose()
    }

    const handleLogout = () => {
        localStorage.removeItem("app_user_id")
        props.history.push(`/`)
        handleClose()
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
                    <MenuItem onClick={handleHome}>Home</MenuItem>
                    <MenuItem onClick={handleYourPlants}>Your Plants</MenuItem>
                    <MenuItem onClick={handleCheckUps}>Check-Ups</MenuItem>
                    <MenuItem onClick={handleAddPlants}>Add Plants</MenuItem>
                    <MenuItem onClick={handleAddCheckUp}>Add Check-Up</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
                <Typography variant="h5">Happy Plants</Typography>
            </Toolbar>
        </AppBar>
    )
}


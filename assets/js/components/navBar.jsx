import React, { Component, useState } from 'react'
// import PropTypes from 'prop-types'
import {  AppBar,
          Button,
          // CssBaseline, 
          // HiddessBaseLine, 
          // Dran, 
          IconButton,
          // List, 
          // ListItem, 
          // ListItemText,
          Toolbar,
          Typography,
          // WithStyles 
        } from '@material-ui/core';
import {  Dashboard, 
          Assessment,
          AccountBox } from '@material-ui/icons'
import { Route, NavLink, HashRouter } from 'react-router-dom'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

function handleDrawerToggle () {
  const [mobile, setMobile] = useState(true)
  return (
    setMobile(!mobile)
  )
}

class NavBar extends Component {
  render() {
    // const { classes, theme } = this.props
    // const drawer = (
    //   <div>
    //     <div className={classes.toolbar} />
    //     <Divider />
    //     <List>
    //       <ListItem button>
    //         <Dashboard />
    //         <ListItemText inset primary='Home' />
    //       </ListItem>
    //       <ListItem button>
    //         <Assessment />
    //         <ListItemText inset primary='Data' />
    //       </ListItem>
    //     </List>
    //   </div>
    // )
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton color='inherit' 
                        aria-label='Menu' 
                        // className={classes.menuButton}
                        // onClick={handleDrawerToggle()}
                        >
              <Dashboard />
            </IconButton>
            <Typography variant='title' color='inherit'>
              Bioreactor
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default NavBar
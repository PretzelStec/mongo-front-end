import React from 'react'
import { Typography, makeStyles, AppBar, Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '.5rem',
    backgroundColor: 'white',
    boxShadow: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
  },
  logOut: {
    marginLeft: 100,
    color: 'black',
  },
  userName: {
    textAlign: 'right',
    marginRight: 100,
    margin: 'auto',
    color: 'black',
  },
}))

const HomeScreen = () => {
  const classes = useStyles()

  return (
    <AppBar position='static' style={{ boxShadow: 'none' }}>
      <Toolbar className={classes.root}>
        <Typography className={classes.logOut} variant='h4'>
          Log Out
        </Typography>
        <Typography className={classes.userName} variant='h4'>
          Edward
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default HomeScreen

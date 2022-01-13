import React from 'react'
import { makeStyles, AppBar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginTop: 100,
    position: 'initial',
    marginBottom: 0,
    top: 'auto',
    backgroundColor: 'rgb(0,0,0,0)',
    boxShadow: 'none',
    padding: '1rem',
    textAlign: 'center',
    margin: 'auto',
    minHeight: '10rem',
  },
  copyright: {
    marginTop: '5rem',
    color: 'black',
  },
}))

export default function BottomAppBar() {
  const classes = useStyles()
  const currentYear = new Date()

  return (
    <AppBar className={classes.appBar}>
      <div className={classes.copyright}>
        <Typography variant='caption'>
          ©{currentYear.getFullYear()} UPLOAD APP ALL RIGHTS RESERVED.
        </Typography>
      </div>
    </AppBar>
  )
}

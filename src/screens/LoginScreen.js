import React from 'react'
import Helmet from 'react-helmet'
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
} from '@material-ui/core'
import Box from '@mui/material/Box'
import useStyles from '../styles/MainStyleSheet'
import Fade from '@mui/material/Fade'
import Slide from '@mui/material/Slide'

const LoginScreen = () => {
  const classes = useStyles()

  return (
    <Fade key={'LogIn'} timeout={500} in={true}>
      <Box className={classes.root}>
        <Helmet>
          <title>Log In</title>
          <body className='mainDiv' />
        </Helmet>

        <Container className={classes.loginCont}>
          <Typography className={classes.title} variant='h4'>
            File Upload Log In
          </Typography>
          <Typography className={classes.subTitle}>
            Welcome! Let's get started!
          </Typography>
          <Box className={classes.inputBox}>
            <FormControl className={classes.form}>
              <InputLabel>Email address</InputLabel>
              <Input id='email address' disableUnderline={true} />
            </FormControl>
          </Box>

          <Box className={classes.inputBox}>
            <FormControl className={classes.form}>
              <InputLabel>Password</InputLabel>
              <Input
                InputProps={{
                  style: {
                    focused: 'red',
                  },
                }}
                id='password'
                type='password'
                disableUnderline={true}
              />
            </FormControl>
          </Box>
          <a href='/home' style={{ textDecoration: 'none' }}>
            <Button className={classes.Btn}>Log In</Button>
          </a>

          <Typography className={classes.newUse}> New User? </Typography>
          <a href='/signup'>
            <Typography className={classes.signUp}> Sign Up </Typography>
          </a>
        </Container>
      </Box>
    </Fade>
  )
}

export default LoginScreen

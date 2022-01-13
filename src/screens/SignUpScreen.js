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

const SignUpScreen = () => {
  const classes = useStyles()

  return (
    <Fade key={'SignUp'} timeout={500} in={true}>
      <Box className={classes.root}>
        <Helmet>
          <title>Sign Up</title>
          <body className='mainDiv' />
        </Helmet>

        <Container className={classes.loginCont}>
          <Typography className={classes.title} variant='h4'>
            File Upload Sign Up
          </Typography>
          <Typography className={classes.subTitle}>
            Thanks for signing up!
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

          <Button className={classes.Btn}>Sign Up</Button>

          <Typography className={classes.newUse}>
            Already have an account?{' '}
          </Typography>
          <a href='/'>
            <Typography className={classes.signUp}> Log In </Typography>
          </a>
        </Container>
      </Box>
    </Fade>
  )
}

export default SignUpScreen

import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
  Box,
} from '@material-ui/core'
import useStyles from '../styles/MainStyleSheet'
import Fade from '@mui/material/Fade'
import Message from '../components/Message'
import Loader from '../components/Loader'

const SignUpScreen = (location, history) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  // Declare new state variables and functions
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  // Go to userRegister in the state and pull out information
  const userRegister = useSelector((state) => state.userRegister)
  const { success, loading, error, userInfo } = userRegister

  // Assign redirect
  const redirect = location.search ? location.search.split('=')[1] : '/'

  // useEffect hook called after render
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  // Function called on submit
  const submitHandler = (e) => {
    e.preventDefault()
    if (error) {
      setMessage(error.message)
    }
    dispatch(register(username, email, password))
  }

  return (
    <>
      <>
        <Helmet>
          <title>Sign Up</title>
          <body className='mainDiv' />
        </Helmet>
        {loading && <Loader />}
      </>

      <Fade key={'SignUp'} timeout={500} in={true}>
        <Box className={classes.root}>
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
                  inputprops={{
                    style: {
                      focused: 'red',
                    },
                  }}
                  id='password'
                  type='password'
                  disableUnderline={true}
                />
              </FormControl>

              {message && <Message severity='error'>{message}</Message>}
            </Box>

            <Button className={classes.Btn}>Sign Up</Button>

            <Typography className={classes.newUse}>
              Already have an account?
            </Typography>
            <a href='/'>
              <Typography className={classes.signUp}> Log In </Typography>
            </a>
          </Container>
        </Box>
      </Fade>
    </>
  )
}

export default SignUpScreen

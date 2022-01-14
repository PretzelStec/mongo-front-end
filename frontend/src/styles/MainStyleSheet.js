import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },

  // Container
  loginCont: {
    margin: 'auto',
    marginTop: 150,
    padding: '5rem',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
    backgroundColor: 'white',
    borderRadius: 10,
    [theme.breakpoints.up('xs')]: {
      width: '90%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '30%',
    },
  },

  // Title
  title: {
    marginTop: -20,
    [theme.breakpoints.up('xs')]: {
      fontSize: '4.5vmax',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3vmax',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.2vmax',
    },
  },
  subTitle: {
    marginBottom: 30,
    color: '#b3b3b3',
  },

  // Form Section
  inputBox: {
    padding: 20,
  },
  form: {
    width: '100%',
  },

  // Button Section
  Btn: {
    marginTop: 30,
    width: '90%',
    padding: '1rem',
    backgroundColor: '#0175f2',
    color: 'white',
    boxShadow:
      ' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
  },
  BtnGrid: { marginTop: 20, width: '100%', padding: '1rem' },

  // Sign up
  newUse: {
    marginTop: 50,
    display: 'inline-block',
    color: '#b3b3b3',
  },
  signUp: {
    color: 'black',
    display: 'inline-block',
    marginLeft: 10,
    cursor: 'pointer',
    '&:hover': {
      color: '#b3b3b3',
    },
  },
}))

export default useStyles

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },

  dropZone: {
    width: 900,
  },

  // Container
  filesCont: {
    textAlign: 'left',
    margin: 'auto',
    marginTop: 60,
    padding: '2rem',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
    backgroundColor: 'white',
    borderRadius: 2,
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
      width: '80%',
    },
  },

  // Title
  headGrid: {
    textAlign: 'center',
    margin: 'auto',
    width: '80%',
  },

  // Table
  insideDiv: {
    minHeight: '30rem',
  },
  row: {
    borderColor: '#f2f2f2',
  },
  downIcon: {
    color: '#007E33',
    marginRight: 20,
  },
  trashIcon: {
    color: '#CC0000',
    cursor: 'pointer',
  },
  upBtn: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '.5rem',
  },
  upBtnBox: {
    textAlign: 'right',
  },

  // Modal
  modal: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: 'none',
    padding: '3rem',
  },
  btnGrid: {
    marginTop: '2rem',
  },
  canBtn: {
    backgroundColor: '#CC0000',
    color: 'white',
  },
  delBtn: {
    backgroundColor: '#007E33',
    marginLeft: '4rem',
    color: 'white',
  },
}))

export default useStyles

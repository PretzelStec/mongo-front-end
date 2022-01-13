import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import {
  Container,
  Typography,
  makeStyles,
  Button,
  Modal,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Fade,
} from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import Footer from '../components/Footer'
import { DropzoneDialog } from 'material-ui-dropzone'
import useStyles from '../styles/HomeStyleSheet'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('StecsDickPic.png', '01/11/22'),
  createData('EdsDickPic.png', '25/09/21'),
  createData('DylansDickPic.png', '25/12/21'),
  createData('Godzilla.png', '01/13/22'),
  createData('KrabbyPattySecretForumla.txt', '01/02/22'),
]

const HomeScreen = () => {
  const classes = useStyles()

  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  const [open, setOpen] = useState(false)
  const [fileModal, setFOpen] = useState(false)

  const handleFOpen = () => setFOpen(true)
  const handleFClose = () => setFOpen(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ height: '100%' }}>
      <Fade key={'Home'} timeout={500} in={true}>
        <Box
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          className={classes.root}
        >
          <Container className={classes.filesCont}>
            <Grid container className={classes.headGrid}>
              <Grid item item xs={6}>
                <Typography style={{ textAlign: 'left' }} variant='h6'>
                  Edward Olszeski
                </Typography>
              </Grid>
              <Grid item item xs={6}>
                <Typography style={{ textAlign: 'right' }} variant='h6'>
                  Log Out
                </Typography>
              </Grid>
            </Grid>
          </Container>

          <Helmet>
            <title>Log In</title>
            <body className='mainDiv' />
          </Helmet>

          <Container className={classes.filesCont}>
            <TableContainer className={classes.insideDiv}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ border: 'none' }}>
                      <Typography variant='subtitle1'>Name</Typography>
                    </TableCell>
                    <TableCell sx={{ border: 'none' }} align='right'>
                      <Typography variant='subtitle1'>Date</Typography>
                    </TableCell>
                    <TableCell
                      sx={{ border: 'none' }}
                      align='right'
                    ></TableCell>
                    <TableCell
                      sx={{ border: 'none' }}
                      align='right'
                    ></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody className={classes.row}>
                  {rows.map((row) => (
                    <TableRow
                      hover={true}
                      key={row.name}
                      className={classes.row}
                    >
                      <TableCell sx={{ borderColor: '#f0f0f0' }} align='left'>
                        <Typography>{row.name}</Typography>
                      </TableCell>
                      <TableCell sx={{ borderColor: '#f0f0f0' }} align='right'>
                        <Typography>{row.calories}</Typography>
                      </TableCell>

                      <TableCell sx={{ borderColor: '#f0f0f0' }} align='right'>
                        <FileDownloadIcon className={classes.downIcon} />
                        <DeleteIcon
                          className={classes.trashIcon}
                          onClick={handleOpen}
                        />
                      </TableCell>
                      <TableCell
                        sx={{ borderColor: '#f0f0f0' }}
                        align='right'
                      ></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box className={classes.upBtnBox}>
              <Button className={classes.upBtn} onClick={handleFOpen}>
                Upload
              </Button>
            </Box>
          </Container>
        </Box>
      </Fade>

      <Modal open={open} disableBackdropClick>
        <Box sx={{ minWidth: 300 }} className={classes.modal}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Are you sure you want to delete?
          </Typography>

          <Grid container className={classes.btnGrid}>
            <Grid item>
              <Button onClick={handleClose} className={classes.canBtn}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={handleClose} className={classes.delBtn}>
                Delete
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <DropzoneDialog
        modalClass={classes.dropZone}
        open={fileModal}
        onClose={handleFClose}
        onSave={handleFClose}
        filesLimit={1}
        showPreviews={true}
        maxFileSize={5000000}
      />

      <Footer />
    </div>
  )
}

export default HomeScreen

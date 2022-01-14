/*global some_unused_var*/
import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Container, Grid, Box, Fade, Modal, Button } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import Footer from '../components/Footer'
import useStyles from '../styles/HomeStyleSheet'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'

function createData(name, date) {
  return { name, date }
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

  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

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
              <Grid item xs={6}>
                <Typography style={{ textAlign: 'left' }} variant='h6'>
                  Edward Olszeski
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography style={{ textAlign: 'right' }} variant='h6'>
                  Log Out
                </Typography>
              </Grid>
            </Grid>
          </Container>

          <Helmet>
            <title>Home Screen</title>
            <body className='mainDiv' />
          </Helmet>

          <Container className={classes.filesCont}>
            {rows.map((row) => (
              <Grid container key={row.name}>
                <Grid item xs={11}>
                  <Accordion
                    expanded={expanded === row}
                    onChange={handleChange(row)}
                    style={{ boxShadow: 'none' }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel1bh-content'
                      id='panel1bh-header'
                    >
                      <Typography sx={{ p: 1, width: '33%', flexShrink: 0 }}>
                        {row.name}
                      </Typography>
                      <Typography sx={{ p: 1, color: 'text.secondary' }}>
                        {row.date}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <FileDownloadIcon className={classes.downIcon} />
                      <DeleteIcon
                        className={classes.trashIcon}
                        onClick={handleOpen}
                      />
                      <img src='https://mongo-ht-2022-api.herokuapp.com/fileinfo/dat-ass.gif' />
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item xs={1}>
                  <MoreVertIcon style={{ marginTop: 20, marginLeft: -10 }} />
                </Grid>
              </Grid>
            ))}
          </Container>
        </Box>
      </Fade>

      <Modal open={open}>
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

      <Footer />
    </div>
  )
}

export default HomeScreen

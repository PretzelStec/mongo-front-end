import * as React from 'react'
import Alert from '@mui/material/Alert'

const Message = ({ children, severity }) => {
  return <Alert severity={severity}>{children}</Alert>
}

export default Message

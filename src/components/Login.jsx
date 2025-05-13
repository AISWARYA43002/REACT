import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <div style={{marginTop:'5%',textAlign:'center'}}>
        <div >
        <TextField variant='outlined' color='secondary' label='Username'></TextField></div><br/>
      <div>
      <TextField variant='outlined' color='secondary' label='Password'></TextField></div><br /><br />
      <div>
        <Button color='secondary' variant='contained'>Login</Button>
      </div>
   </div>
      
    </div>
  )
}

export default Login

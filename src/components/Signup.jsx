import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    // const my_name='Aiswarya'//USE STATE
    const [my_name,setName]=useState('Aiswarya');
    const [count,setCount]=useState(0);

    function changeName(){
        setName('Ammu')
    }
    function counter() {
      setCount(count+1)
    }
  return (
    <div style={{marginTop:'5%',textAlign:'center'}}>
        <h4>Welcome {my_name} to ReactJs Programming </h4>
        <div >
        <TextField variant='outlined' color='secondary' label='Firstname'></TextField></div><br/>
       <div> 
      <TextField variant='outlined' color='secondary' label='email'></TextField></div><br />
      <div>
      <TextField variant='outlined' color='secondary' label='password'></TextField></div><br />
      <div>
      <TextField variant='outlined' color='secondary' label='Phone number'></TextField></div><br /><br />
      <div>
        <Button color='secondary' variant='contained'onClick={changeName}>Register</Button>
      </div><br />
      <div>
        <Button color='success' variant='contained'onClick={counter}>Count</Button>
        <p>The count button was clicked {count} times</p>
      </div>
   </div>
  )
}

export default Signup

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core'
import { signin } from '../../redux/actions/userActions'

const SigninScreen = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const paperStyle={padding:20, height:'70vh', width:280, margin:'100px auto'}
  const avatarStyle={backgroundColor: '#283894'}
  const btnStyle={margin:'8px 0'}

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle} ><LockOutlinedIcon /></Avatar>
          <h2>Sign in</h2> 
        </Grid>

          <TextField style={btnStyle} id="outlined-basic-1" label="Nombre de usuario" variant="outlined" fullWidth required onChange={(e) => {setUsername(e.target.value)}}/>

          <TextField style={btnStyle} id="outlined-basic-2" label="Contraseña" variant="outlined" type='password' fullWidth required onChange={(e) => {setPassword(e.target.value)}}/>

        <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />

      <Button style={btnStyle} variant='contained' type='submit' color='primary' fullWidth onClick={() => {dispatch(signin(username, password))}}>Sign in</Button>
      <Typography>
        <Link href='#'>¿Olvidaste tu contraseña?</Link>
      </Typography>
      <Typography>
        ¿Ya tienes una cuenta? <Link href='#'>Sign up</Link>
      </Typography>
      </Paper>
    </Grid>
  )
}

export default SigninScreen
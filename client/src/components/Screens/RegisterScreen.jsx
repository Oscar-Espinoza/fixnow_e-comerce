import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '@material-ui/lab/Alert';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core'
import { register } from '../../redux/actions/userActions'
import LoadingBox from '../LoadingBox';

const RegisterScreen = (props) => {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()
  const redirect = props.location.search ? props.location.search.split('?')[1] : '/'

  const userRegister = useSelector(state => state.userRegister)
  const { userInfo, loading, error } = userRegister

  const paperStyle={padding:20, height:'70vh', width:280, margin:'100px auto'}
  const avatarStyle={backgroundColor: '#283894'}
  const btnStyle={margin:'8px 0'}

  useEffect(() => {
    if(userInfo){
      props.history.push(redirect)
    }
  }, [props.history, redirect, userInfo])

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle} ><LockOutlinedIcon /></Avatar>
          <h2>Registrar Cuenta</h2>
          {loading && <LoadingBox></LoadingBox>} 
          {error && <Alert severity="error">
                      {error}
                    </Alert>}
        </Grid>

          <TextField style={btnStyle} id="outlined-basic-1" label="Nombre" variant="outlined" fullWidth required onChange={(e) => {setName(e.target.value)}}/>

          <TextField style={btnStyle} id="outlined-basic-1" label="Correo Electronico" variant="outlined" fullWidth required onChange={(e) => {setUsername(e.target.value)}}/>

          <TextField style={btnStyle} id="outlined-basic-2" label="Contraseña" variant="outlined" type='password' fullWidth required onChange={(e) => {setPassword(e.target.value)}}/>

          <TextField style={btnStyle} id="outlined-basic-2" label="Confirmar contraseña" variant="outlined" type='password' fullWidth required onChange={(e) => {setConfirmPassword(e.target.value)}}/>

        <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />

      <Button style={btnStyle} variant='contained' type='submit' color='primary' fullWidth onClick={() => {
        (password !== confirmPassword) ? alert('La contraseña y confirmar contraseña no coinciden') : dispatch(register(name, username, password))
      }}>Registrar</Button>
      <Typography>
        <Link href='#'>¿Olvidaste tu contraseña?</Link>
      </Typography>
      <Typography>
        ¿Ya tienes una cuenta? <Link href={`/register?redirect=${redirect}`}>Inicia sesión</Link>
      </Typography>
      </Paper>
    </Grid>
  )
}

export default RegisterScreen
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import TrelloIcon from '../../assets/trello.svg?react'
import SvgIcon from '@mui/material/SvgIcon'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    const stateMap = {
      email: setEmail,
      password: setPassword,
      error: setError,
    }
    stateMap[name]?.(value)
    console.log(name, value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(email, password)
    api.auth.login({ username_or_email: email, password })
      .then((response) => {
        // console.log("data: ", response.data)
        // console.log(response.data.success)
        // console.log("user: " ,response.data.user)
        // console.log("access token: ", response.data.data.access_token)
        // console.log("refresh token: ", response.data.data.refresh_token)
        const accessToken = response.data.data['access_token']
        const refreshToken = response.data.data['refresh_token']

        if (response.data.success && response.data.data.user) {
          // redirect to dashboard
          localStorage.setItem('accessToken', accessToken)
          localStorage.setItem('refreshToken', refreshToken)
          navigate('/home')
        } else {
          // show error message
          setError("something went wrong, please try again")
        }
      })
      .catch((error) => {
        console.error(error)
        setError(error.message)
      }) 
  }


  return (
    <Box sx={{
      maxWidth: 400,
      margin: 'auto',
      padding: 2,
      border: '1px solid #ccc',
      borderRadius: 4,
      bgcolor: 'white',
      boxShadow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
        <SvgIcon component={TrelloIcon} fontSize="medium" inheritViewBox sx={{color: 'primary.main'}}/>
        <Typography variant="span" sx={{
          fontSize: '1.7rem', 
          fontWeight: 'bold', 
          color: (theme) => theme.trelloCustom.fontColorCustom(theme.palette.mode)
        }} > 
          Trello
        </Typography>
      </Box>
      <Typography sx={{
        color: (theme) => theme.trelloCustom.fontColorCustom(theme.palette.mode),
        fontWeight: 'bold',
        fontSize: 16,
      }} align="center" gutterBottom>
        Login to continue
      </Typography>
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        fullWidth
        margin="normal"
        aria-label="Enter your email or username"
        onChange={handleChange}
      >
        {email}
      </TextField>
      <TextField
        label="Password"
        name="password"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleChange}
      >
        {password}
      </TextField>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Continue
      </Button>
      {/* error handle */}
      <Typography sx={{color: 'error.main', marginTop: 1}}>
        {error}
      </Typography>
      <Typography sx={{color: (theme) => theme.trelloCustom.fontColorCustom(theme.palette.mode), cursor: 'pointer', marginTop: 1}}>
        Or continue with:
      </Typography>
      <Box sx={{display: 'flex', gap: 1, marginTop: 1}}>
        <Button variant="outlined" color="primary">Google</Button>
        <Button variant="outlined" color="primary">Facebook</Button>
      </Box>
    </Box>
  )
}

export default LoginForm
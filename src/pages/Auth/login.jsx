import Container from '@mui/material/Container'
import LoginForm from '../../components/Auth/LoginForm'

function Login() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <LoginForm />
    </Container>
  )
}

export default Login
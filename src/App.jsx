import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import PrivateRoute from './components/PrivateRoute/privateRoute'
import NotFound from './pages/Errors/404'
import Forbidden from './pages/Errors/403'
import BadRequest from './pages/Errors/400'
import ServerError from './pages/Errors/500'
// import GenericError from './pages/Errors/error'
import ErrorBoundary from './components/Error/errorBoundary'
import theme from './theme'

import Board from './pages/Boards/_id'
import Login from './pages/Auth/login'
import Home from './pages/home'

function App() {
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange noSsr>
      <CssBaseline />
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boards" element={<Board />} />
            <Route path="/boards/:id" element={<Board />} />
            <Route path="/login" element={<Login />} />
            {/* <Route
              path="/boards/:id"
              element={
                <PrivateRoute>
                  <Board />
                </PrivateRoute>
              }
            /> */}
            <Route path="/forbidden" element={<Forbidden />} />
            <Route path="/bad-request" element={<BadRequest />} />
            <Route path="/server-error" element={<ServerError />} />
            {/* <Route path="/error" element={<GenericError />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  )
}

export default App

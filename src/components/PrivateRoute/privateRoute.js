import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) {
    // Nếu không có accessToken -> chuyển hướng sang trang đăng nhập
    return <Navigate to="/login" />
  }

  // Nếu có accessToken -> render component con
  return children
}

export default PrivateRoute

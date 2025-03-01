import { Component } from 'react'
import GenericError from '../../pages/Errors/error'
import NotFound from '../../pages/Errors/404'
import Forbidden from '../../pages/Errors/403'
import BadRequest from '../../pages/Errors/400'
import ServerError from '../../pages/Errors/500'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      errorMessage: '',
      errorCode: null,
    }
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  // eslint-disable-next-line no-unused-vars
  componentDidCatch(error, info) {
    let errorMessage = ''
    let errorCode = null

    if (error.response) {
      errorCode = error.response.status

      // Xử lý theo mã lỗi
      switch (errorCode) {
        case 404:
          errorMessage = 'The page you are looking for does not exist.'
          break
        case 403:
          errorMessage = 'You do not have permission to access this resource.'
          break
        case 400:
          errorMessage = 'The request could not be understood by the server.'
          break
        case 500:
          errorMessage = 'There was an issue with the server. Please try again later.'
          break
        default:
          errorMessage = 'An unexpected error occurred.'
      }
    } else {
      errorMessage = 'An unexpected error occurred.'
    }

    this.setState({ errorMessage, errorCode })
  }

  render() {
    if (this.state.hasError) {
      const { errorCode } = this.state
      if (errorCode === 404) {
        return <NotFound />
      }
      if (errorCode === 403) {
        return <Forbidden />
      }
      if (errorCode === 400) {
        return <BadRequest />
      }
      if (errorCode === 500) {
        return <ServerError />
      }

      // Hiển thị lỗi chung nếu không phải lỗi được xác định
      return <GenericError message={this.state.errorMessage} />
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children
  }
}

export default ErrorBoundary

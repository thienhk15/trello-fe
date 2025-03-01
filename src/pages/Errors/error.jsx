// eslint-disable-next-line react/prop-types
function GenericError({ message }) {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{message || 'An unexpected error occurred. Please try again later.'}</p>
    </div>
  )
}

export default GenericError

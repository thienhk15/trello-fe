import Button from '@mui/material/Button'

function CreateButton() {
  return (
    <Button variant="contained" sx={{
      backgroundColor: 'blue', 
      fontSize: '0.8rem', 
      borderRadius: '3px', 
      maxHeight: '35px', 
      maxWidth: '80px',
      marginTop: '4px',
      // change text color
      // color: 'white',
    }}>
      Create
    </Button>
  )
}

export default CreateButton
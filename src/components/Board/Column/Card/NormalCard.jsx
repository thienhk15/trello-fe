import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

const CARD_HEIGHT = (theme) => theme.trelloCustom.cardHeight

const sxCustom = {
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  height: CARD_HEIGHT,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  cursor: 'pointer',
  p: 1,
  '&:hover': {
    bgcolor: '#c8d6e5',
  }
}

function NormalCard({card}) {
  if (!card || !card.name) {
    return null // Hoặc có thể hiển thị placeholder
  }
  // const dynamicStyles = {
  //   backgroundColor: card.isImportant ? 'yellow' : 'white', // Ví dụ: đổi màu nếu card quan trọng
  //   ...sxCustom, // Kế thừa các style cơ bản
  // }
  return (
    <Box sx={sxCustom}>
      {card.name || 'No name'}
    </Box>
  )
}

NormalCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired, // `name` phải là chuỗi
  }).isRequired,
}

export default NormalCard
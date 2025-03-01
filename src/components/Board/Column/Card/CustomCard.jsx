import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Proptypes from 'prop-types'

const CARD_HEIGHT = (theme) => theme.trelloCustom.cardHeight

function CustomCard({card}) {
  return (
    <Card sx={{height: CARD_HEIGHT}}>
      <CardContent>
        <Typography> {card.name} </Typography>
      </CardContent>
    </Card>
  )
}

CustomCard.propTypes = {
  card: Proptypes.shape({
    name: Proptypes.string.isRequired
  }).isRequired
}

export default CustomCard
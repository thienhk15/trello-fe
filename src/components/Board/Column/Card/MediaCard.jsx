import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Proptype from 'prop-types'

function MediaCard({card}) {
  return (
    <Card sx={{ width: '100%', height: 'auto'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={card.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {card.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {card.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

MediaCard.propTypes = {
  card: Proptype.shape({
    name: Proptype.string.isRequired,
    description: Proptype.string,
    image: Proptype.string.isRequired,
  }).isRequired
}

export default MediaCard
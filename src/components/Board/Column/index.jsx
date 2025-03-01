import Box from '@mui/material/Box'

import Header from './Header'
import Footer from './Footer'
import NormalCard from './Card/NormalCard'
// import CustomCard from './Card/CustomCard'
// import MediaCard from './Card/MediaCard'

function Column( {column} ) {
  console.log('(Column) column: ', column)
  // eslint-disable-next-line react/prop-types
  console.log('(Column) cards: ', column.cards)
  return (
    <Box sx={{
      minWidth: '300px',
      maxWidth: '300px',
      maxHeight: '100%',
      height: 'fit-content',
      bgcolor: 'primary.50',
      ml: 2,
      p: 1,
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      // overflow: 'hidden',
    }}>
      <Header/>
      <Box sx={{
        overflowY: 'auto',  
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '0 5px 0 0',
        m: '0 0 0 5px'
      }}>
        {/* {column.cards.map((card, index) => {
          if (card.type === 'normal') {
            return <NormalCard key={index} card={card}/>
          } else if (card.type === 'custom') {
            return <CustomCard key={index} card={card}/>
          } else if (card.type === 'media') {
            return <MediaCard key={index} card={card}/>
          } else {
            return null
          }
        })} */}
        {/* eslint-disable-next-line react/prop-types */}
        {column.cards.map((card, index) => {
          return <NormalCard key={index} card={card}/>
        })}
      </Box>
      <Footer/>
     
    </Box>
    
  )
}

export default Column
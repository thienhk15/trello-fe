import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import ToolTip from '@mui/material/Tooltip'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const COLUMN_FOOTER_HEIGHT = (theme) => theme.trelloCustom.columnFooterHeight

function Footer() {
  return (
    <Box sx={{
      height: COLUMN_FOOTER_HEIGHT,
      p: 0,  
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Button variant="text" startIcon={<AddIcon/>} sx={{
        p: 1,
        width: '80%',
        color: (theme) => theme.trelloCustom.fontColorCustom(theme.palette.mode),
        height: '36px',
        display: 'flex',
        justifyContent: 'flex-start',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          bgcolor: '#c8d6e5',
        }
      }}>
        Add a card
      </Button>
      <Box sx={{
        width: '20%', 
        height: '36px', 
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        ml: 1,
        '&:hover': {
          bgcolor: '#c8d6e5',
        }
      }}>
        <ToolTip title="Create from template..." placement="bottom">
          <ContentCopyIcon sx={{ fontSize: 'small'}} />
        </ToolTip>
      </Box>
    </Box>
  )
}

export default Footer
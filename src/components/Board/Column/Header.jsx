import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ToolTip from '@mui/material/Tooltip'
import ExpanmoreIcon from '@mui/icons-material/ExpandMore'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import ContentCut from '@mui/icons-material/ContentCut'
import Cloud from '@mui/icons-material/Cloud'

const COLUMN_HEADER_HEIGHT = (theme) => theme.trelloCustom.columnHeaderHeight

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }
  return (
    <Box sx={{
      height: COLUMN_HEADER_HEIGHT,
      // p: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      // fontSize: '1.1rem',
      // fontWeight: 'bold',
    }}>
      <Typography sx={{
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}>
        To do
      </Typography>
      <Box>
        <ToolTip title="List actions" placement="bottom"> 
          <ExpanmoreIcon sx={{color: 'text.primary', cursor: 'pointer'}}
            id="basic-column-dropdown"
            aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          />
        </ToolTip>
        <Menu
          id="basic-menu-column-dropdown"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-column-dropdown',
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>Remove column  </ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘X
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>Archive column</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

export default Header
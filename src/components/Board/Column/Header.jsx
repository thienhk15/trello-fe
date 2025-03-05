import React, { useState } from 'react';
import NormalCard from './Card/NormalCard'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ToolTip from '@mui/material/Tooltip'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ExpanmoreIcon from '@mui/icons-material/ExpandMore'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import OpenWithIcon from '@mui/icons-material/OpenWith'
import ControlCameraIcon from '@mui/icons-material/ControlCamera'
import SortIcon from '@mui/icons-material/Sort';
import ArchiveIcon from '@mui/icons-material/Archive';

const COLUMN_HEADER_HEIGHT = (theme) => theme.trelloCustom.columnHeaderHeight

function Header({ toggleCollapse, isCollapsed }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  
  const open = Boolean(anchorEl)
  const handleClickMenu = (event) => { setAnchorEl(event.currentTarget) }
  const handleCloseMenu = () => { setAnchorEl(null) }

  return (
    <Box  sx={{
      height: COLUMN_HEADER_HEIGHT,
      // p: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      // fontSize: '1.1rem',
      // fontWeight: 'bold',
      transform: (isCollapsed ? 'rotate(90deg)' : ''),
    }}>

      <Typography variant="h5" component="div" sx={{
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        textAlign: "center",
        padding: '8px'
      }}>
        To do
      </Typography>
      
      <Box>

        <ToolTip title={isCollapsed ? 'Expand list' : 'Collapse list'} placement="bottom">         
            {isCollapsed ? (
              <UnfoldMoreIcon
                sx={{ color: 'text.primary', cursor: 'pointer' }}
                onClick={toggleCollapse}
              />
            ) : (
              <UnfoldLessIcon
                sx={{ color: 'text.primary', cursor: 'pointer' }}
                onClick={toggleCollapse}
              />
            )}
        </ToolTip>

        <ToolTip title="List actions" placement="bottom"> 
          <ExpanmoreIcon sx={{color: 'text.primary', cursor: 'pointer', display: (isCollapsed ? 'none' : '')}}
            id="basic-column-dropdown"
            aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickMenu}
          />
        </ToolTip>

        <Menu
          id="basic-menu-column-dropdown"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          MenuListProps={{
            'aria-labelledby': 'basic-column-dropdown',
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <PlaylistAddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Add card</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <ContentCopyIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy list</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <OpenWithIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Move list</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <ControlCameraIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Move all cards in this list</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <SortIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Sort by...</ListItemText>
          </MenuItem>
          <Divider />

          <MenuItem>
            <ListItemIcon>
              <ArchiveIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Archive this list</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <ArchiveIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Archive all cards in this list</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

export default Header
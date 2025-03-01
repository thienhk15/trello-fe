import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'

import ModeSelect from '../ModeSelect'

import TrelloIcon from '../../assets/trello.svg?react'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import CreateButton from './Menus/CreateButton'
import Profiles from './Menus/Profiles'

//import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'

import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'

import HelpOutlineIcon from '@mui/icons-material/HelpOutline' 

import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

function AppBar() {
  // write a func that console.log the theme mode
  return (
    <Box sx={{
      px: 2, 
      width: '100%', 
      height: (theme) => theme.trelloCustom.appBarHeight, 
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2,
      overflowX: 'auto',
      bgcolor: (theme)  => (theme.palette.mode === 'dark' ? '#7f8c8d' : '#17c0eb')
    }}>
      <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
        <AppsIcon sx={{color: 'white'}}/>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 0.5}}>
          <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx={{color: 'white'}}/>
          <Typography variant="span" sx={{fontSize: '1.2rem', fontWeight: 'bold', color: 'white'}} >
            Trello
          </Typography>
          <Box sx={{display: {xs: 'none', md: 'flex', }}}>
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />
            <CreateButton />
          </Box>
        </Box>
      </Box>

      <Box sx={{display: 'flex', alignItems: 'center', gap:2}}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{color: 'white'}}/>
              </InputAdornment>
            )
          }}
          sx={{
            minWidth: '120px',
            '& .MuiInputLabel-root': {
              color: 'white', // Màu mặc định của label
            },
            '& .MuiInputBase-root': {
              color: 'white', // Màu mặc định của input
            },
          }} id='outlined-search' label='Search...' type='search' size='small'/>
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{cursor: 'pointer'}}>
            <NotificationsNoneIcon sx={{color: 'white'}}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Information">
          <Badge color="secondary" variant="dot" sx={{cursor: 'pointer', color: 'white'}}>
            <HelpOutlineIcon />
          </Badge>
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
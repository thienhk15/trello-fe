import Box from '@mui/material/Box' 
import Button from '@mui/material/Button'

import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'

import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MEMU_STYLE = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main',
  },
  '&:hover': {
    bgcolor: 'primary.50',
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%', height: (theme) => theme.trelloCustom.boardBarHeight, 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: 2,
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5',
      bgcolor: 'primary.300',
    }}>
      <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
        <Chip 
          sx={MEMU_STYLE}
          icon={<DashboardIcon />} 
          label="Thien's Project" 
          clickable
          // onclick={() => {}}
        />
        <Chip 
          sx={MEMU_STYLE}
          icon={<VpnLockIcon />} 
          label="Public/private workspace" 
          clickable
          // onclick={() => {}}
        />
        <Chip 
          sx={MEMU_STYLE}
          icon={<AddToDriveIcon />} 
          label="Add to Google Drive" 
          clickable
          // onclick={() => {}}
        />
        <Chip 
          sx={MEMU_STYLE}
          icon={<BoltIcon />} 
          label="Automation" 
          clickable
          // onclick={() => {}}
        />
        <Chip 
          sx={MEMU_STYLE}
          icon={<FilterListIcon />} 
          label="Filter" 
          clickable
          // onclick={() => {}}
        />
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>} sx={{fontSize: '0.75rem', color: 'white'}}>
          Invite
        </Button>
        <AvatarGroup max={7} sx={{
          '& .MuiAvatar-root': {
            width: 34,
            height: 34,
            fontSize: '16px',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            '&:first-of-type': {
              bgcolor: '#a4b0be',
            }
          }
        }}>
          <Tooltip title="thienhk15">
            <Avatar alt="thienhk15" src="https://avatars.githubusercontent.com/u/29726279?v=4" />
          </Tooltip>
          <Tooltip title="thienhk15">
            <Avatar alt="thienhk15" src="https://avatars.githubusercontent.com/u/29726279?v=4" />
          </Tooltip>
          <Tooltip title="thienhk15">
            <Avatar alt="thienhk15" src="https://avatars.githubusercontent.com/u/29726279?v=4" />
          </Tooltip>
          <Tooltip title="thienhk15">
            <Avatar alt="thienhk15" src="https://avatars.githubusercontent.com/u/29726279?v=4" />
          </Tooltip>
          <Tooltip title="thienhk15">
            <Avatar alt="thienhk15" src="https://avatars.githubusercontent.com/u/29726279?v=4" />
          </Tooltip>
          <Tooltip title="thienhk15">
            <Avatar alt="thienhk15" src="https://avatars.githubusercontent.com/u/29726279?v=4" />
          </Tooltip>
          <Tooltip title="thienhk15">
            <Avatar alt="thienhk15" src="https://avatars.githubusercontent.com/u/29726279?v=4" />
          </Tooltip>
          <Tooltip title="thienhk15">
            <Avatar alt="thienhk15" src="https://avatars.githubusercontent.com/u/29726279?v=4" />
          </Tooltip>
          <Tooltip title="thienhk15">
            <Avatar alt="thienhk15" src="https://avatars.githubusercontent.com/u/29726279?v=4" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>

  )
}

export default BoardBar
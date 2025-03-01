import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect () {
  const { mode, setMode } = useColorScheme()
  if (!mode) {
    return null
  }

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
    // console.log(mode)
  }

  return (
    <FormControl size="small" sx={{minWidth: '110px'}}>
      <InputLabel sx={{color: 'white'}} id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        sx={{
          // color: 'black',
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px !important',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px !important', 
            borderColor: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
          },
        }}
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        // defaultValue='system'
      >
        <MenuItem value="light">
          <Box style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <LightModeIcon fontSize="small"/> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box style={{display: 'flex', alignItems: 'center', gap: '1'}}>
            <DarkModeOutlinedIcon fontSize="small"/> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box style={{display: 'flex', alignItems: 'center', gap: '2'}}>
            <SettingBrightnessIcon fontSize="small"/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
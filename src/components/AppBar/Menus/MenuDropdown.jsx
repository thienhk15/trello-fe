import React from 'react'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { Dropdown } from '@mui/base/Dropdown'
import { Menu } from '@mui/base/Menu'
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton'
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem'
import { styled } from '@mui/system'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { PopupContext } from '@mui/base/Unstable_Popup'
import { CssTransition } from '@mui/base/Transitions'


const MenuDropdown = ({ text, items }) => {
  return (
    <Box>
      <Dropdown>
        <MenuButton sx={{ color: 'primary.main', display: 'flex', alignItems: 'center' }}>
          {text}
          <ExpandMoreIcon />
        </MenuButton>
        <Menu slots={{ listbox: AnimatedListbox }}>
          {items.map((item, index) => (
            <MenuItem sx={{color: 'primary.main'}} key={index} onClick={item.onClick} disabled={item.disabled}>
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </Dropdown>
    </Box>
  )
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
}

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif
  font-size: 0.875rem
  box-sizing: border-box
  padding: 6px
  margin: 12px 0
  min-width: 200px
  border-radius: 12px
  overflow: auto
  outline: 0
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'}
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]}
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]}
  box-shadow: 0 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]}
  z-index: 1

  .closed & {
    opacity: 0
    transform: scale(0.95, 0.8)
    transition: opacity 200ms ease-in, transform 200ms ease-in
  }

  .open & {
    opacity: 1
    transform: scale(1, 1)
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48)
  }

  .placement-top & {
    transform-origin: bottom
  }

  .placement-bottom & {
    transform-origin: top
  }
  `
)

const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
  // eslint-disable-next-line no-unused-vars
  const { ownerState, ...other } = props
  const popupContext = React.useContext(PopupContext)

  if (popupContext === null) {
    throw new Error(
      'The `AnimatedListbox` component cannot be rendered outside a `Popup` component',
    )
  }

  const verticalPlacement = popupContext.placement.split('-')[0]
  console.log('animation', verticalPlacement)
  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <Listbox {...other} ref={ref} />
    </CssTransition>
  )
})

AnimatedListbox.propTypes = {
  ownerState: PropTypes.object.isRequired,
}

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none
  padding: 8px
  border-radius: 8px
  cursor: default
  user-select: none

  &:last-of-type {
    border-bottom: none
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]}
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]}
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]}
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]}
  }
`)

const MenuButton = styled(BaseMenuButton)(({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif
  font-weight: 600
  font-size: 0.875rem
  line-height: 1.5
  padding: 8px 16px
  border-radius: 8px
  transition: all 150ms ease
  cursor: pointer
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'}
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]}
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]}
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]}
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]}
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]}
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]}
    outline: none
  }
`)

MenuDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
}

export default MenuDropdown

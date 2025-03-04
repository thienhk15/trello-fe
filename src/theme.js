import { extendTheme } from "@mui/material/styles"
import { lightPrimary, lightSecondary, darkPrimary, darkSecondary } from "./utils/themeColor"

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

const CARD_HEIGHT = '40px'
const COLUMN_FOOTER_HEIGHT = '56px'
const COLUMN_HEADER_HEIGHT = '50px'

const theme = extendTheme({
  trelloCustom: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,

    cardHeight: CARD_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,

    fontColorCustom: (mode) => (mode === 'light' ? '#000000' : '#FFFFFF'),
  },
  colorSchemeSelector: 'class',
  // cssVariables: {
  //   colorSchemeSelector: 'class'
  // },
  colorSchemes: {
    // light: true, 
    // dark: true,
    light: {
      palette: {
        primary: lightPrimary,
        secondary: lightSecondary,
        text: {
          primary: 'black',
        },
      },
    },
    dark: {
      palette: {
        primary: darkPrimary,
        secondary: darkSecondary,
        text: {
          primary: 'white',
        },
      }
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          // Thêm tùy chỉnh style cho Card ở đây
          flexShrink: 0,
          // overflow: 'unset'
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '4px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#95a5a6',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          textTransform: 'none', // Chữ thường
          fontWeight: 'normal',
          '& .MuiButton-endIcon': {
            marginLeft: '2px', // Khoảng cách giữa chữ và icon
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({theme}) => ({
          // color: theme.palette.primary.main,
          fontSize: '0.875rem',
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({theme}) => ({ 
          // color: theme.palette.primary.main,
          fontSize: '0.875rem',
          // '& .MuiOutlinedInput-notchedOutline': {
          //   borderColor: theme.palette.primary.light,
          // },
          // '&:hover .MuiOutlinedInput-notchedOutline': {
          //   borderColor: theme.palette.primary.main,
          // },
          '& fieldset': {
            borderWidth: '1px !important',
          },
        }),
      },
    },
  },
})


export default theme



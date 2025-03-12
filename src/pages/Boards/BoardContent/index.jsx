import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Column from '../../../components/Board/Column'

// import customAxios from '../../../utils/customAxios'

import api from '../../../api'

// const host = import.meta.env.VITE_HOST
// const corePort = import.meta.env.VITE_CORE_PORT 
// const coreUrl = import.meta.env.VITE_CORE_URL
// const baseUrl = `http://${host}${coreUrl}`

// eslint-disable-next-line react/prop-types
function BoardContent({ id }) {
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const fetchColumns = async () => {
      try {
        const boardID = id || 1
        // const response = await customAxios.get(`${baseUrl}/boards/1`)
        const response = await api.board.getById(boardID)
        const data = response.data
        console.log('(BoardContent) data: ', data)
        const column = data.data.lists || []
        console.log('(BoardContent) columns: ', column)
        setColumns(column)
      } catch (error) {
        console.error('Error fetching columns:', error)
      }
    }

    fetchColumns()
  }, [])

  return (
    <Container disableGutters maxWidth={false}>
      <Box sx={{
        width: '100%',
        height: (theme) => theme.trelloCustom.boardContentHeight, 
        bgcolor: 'primary.main',
        display: 'flex',
        p: 1,
        overflowX: 'auto',
        overflowY: 'hidden',
        // '&::-webkit-scrollbar-track': {m: 2}
        // alignItems: 'center',
      }}>
        {/* column */}
        {columns.map((column, index) => {
          return <Column key={index} column={column}/>
        })}
      </Box>
    </Container>
  )
}

export default BoardContent